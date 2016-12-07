'use strict';

require('./videoload2.less');
import * as Video2Day from './video2day';

(function() {
    (<any>window).video2day = new Video2Day.Framedispatcher();
})();