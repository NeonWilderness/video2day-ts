/*
 Strawpoll-Plugin
 */

import { frameTemplate, IInstanceOptions, Provider } from './generic';

interface IPollData {
    count?: number;
    captcha?: boolean;
}

const pollDimensions = {
    small: { header: 73, captcha: 98, option: 62, footer: 190, powered: 36, padding: 2*8+2, margin: 0 },
    large: { header: 73, captcha: 98, option: 42, footer: 95, powered: 36, padding: 2*8+2, margin: 10 }
}

export class Strawpoll extends Provider {

    source: string = 'https://www.strawpoll.me/embed_1/{_id}';

    /**
     * Initialize the plugin ID
     */
    constructor() {
        super('strawpoll');
    }

    getPollData(pollId: string): Promise<IPollData> {
        return new Promise( (resolve, reject) => {
            let query = `select * from json where url="http://strawpoll.me/api/v2/polls/${pollId}"`;
            let xhr = new XMLHttpRequest();
            xhr.open('GET', `https://query.yahooapis.com/v1/public/yql?q=${encodeURIComponent(query)}&format=json`, true);
            xhr.send();
            xhr.onreadystatechange = (e) => {
              if (xhr.readyState == 4) { 
                if(xhr.status == 200) {
                  let data = JSON.parse(xhr.responseText);
                  if (data.query.results) {
                    let poll = data.query.results.json;
                    resolve({ count: poll.options.length, captcha: (poll.captcha==='true') });
                  } else {
                    reject('Für diese ID existiert keine Strawpoll-Umfrage.');
                  }
                } else {
                  resolve({ count: 3, captcha: false });
                }
              }
            }
        });
    }

    setHeightBeforeRender(options: IInstanceOptions, position: string, poll: IPollData): void {
        let dim = pollDimensions[ (options.width<680 ? 'small' : 'large') ];
        let { count, captcha } = poll;
        if (captcha) options.width = Math.max(options.width, 318); 
        let height: number = dim.header + dim.option*count + dim.footer + Number(captcha)*dim.captcha
                           + dim.powered + dim.padding + dim.margin;
        this.setFixedHeight(options, height);
        this.render(this.fillParams(frameTemplate.replace('_src', this.source)), position);
    }

    async generate(options: IInstanceOptions, position: string) {
        this.init(options);
        let pollInfo = localStorage.getItem(`${this.getID()}-${options.id}`);
        if (pollInfo) {
            this.setHeightBeforeRender(options, position, JSON.parse(pollInfo));
        } else {
            try {
                let pollData = <IPollData>await this.getPollData(options.id);
                localStorage.setItem(`${this.getID()}-${options.id}`, JSON.stringify(pollData));
                this.setHeightBeforeRender(options, position, pollData);
            }
            catch (err) {
                this.render(err);
            }
        }
    }

}