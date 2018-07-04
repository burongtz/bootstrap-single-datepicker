import defaults from './defaults';
import {
    createPlugin,
    callMethodPlugin
} from './core';

(function ($) {
    "use strict";

    let pluginName = 'singleDatepicker';

    if ($.fn[pluginName] == null) {
        $.fn[pluginName] = function (options) {
            if (!options) {
                options = {};
            }

            if (typeof options === 'object') {
                return createPlugin.call(this, pluginName, options);
            } else if (typeof options === 'string' && options[0] !== '_') {
                return callMethodPlugin.call(this, pluginName, arguments, options);
            }
        }
    }

    $.fn[pluginName].getDefaults = function () {
        return defaults;
    }
}(jQuery));