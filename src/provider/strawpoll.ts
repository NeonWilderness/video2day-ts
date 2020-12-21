/*
 Strawpoll-Plugin
 */

import { frameTemplate, IInstanceOptions, Provider } from './generic';

interface IPollData {
  count?: number;
  captcha?: boolean;
}

const pollDimensions = {
  small: { header: 73, captcha: 98, option: 62, footer: 190, powered: 36, padding: 2 * 8 + 2, margin: 0 },
  large: { header: 73, captcha: 98, option: 42, footer: 95, powered: 36, padding: 2 * 8 + 2, margin: 10 }
}

export class Strawpoll extends Provider {

  source = 'https://www.strawpoll.me/embed_1/{_id}';

  /**
   * Initialize the plugin ID
   */
  constructor() {
    super('strawpoll');
  }

  getPollData(pollId: string): Promise<IPollData> {
    return new Promise(resolve => {
      $.getJSON(`https://www.strawpoll.me/api/v2/polls/${pollId}`, function (data) {
        resolve({ count: data.options.length, captcha: data.captcha });
      })
        .fail(function () {
          resolve({ count: 3, captcha: false });
        })
    });
  }

  setHeightBeforeRender(options: IInstanceOptions, position: string, exportRun: boolean, poll: IPollData): void {
    const dim = pollDimensions[(options.width < 680 ? 'small' : 'large')];
    const { count, captcha } = poll;
    if (captcha) options.width = Math.max(options.width, 318);
    const height: number = dim.header + dim.option * count + dim.footer + Number(captcha) * dim.captcha
      + dim.powered + dim.padding + dim.margin;
    this.setFixedHeight(options, height);
    this.render(this.fillParams(frameTemplate.replace('_src', this.source)), exportRun, position);
  }

  async generate(options: IInstanceOptions, position: string, exportRun: boolean): Promise<void> {
    this.init(options);
    const pollInfo = localStorage.getItem(`${this.getID()}-${options.id}`);
    if (pollInfo) {
      this.setHeightBeforeRender(options, position, exportRun, JSON.parse(pollInfo));
    } else {
      try {
        const pollData = <IPollData>await this.getPollData(options.id);
        localStorage.setItem(`${this.getID()}-${options.id}`, JSON.stringify(pollData));
        this.setHeightBeforeRender(options, position, exportRun, pollData);
      }
      catch (err) {
        this.render(err, exportRun);
      }
    }
  }

}