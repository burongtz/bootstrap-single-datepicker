import App from './App';

/**
 * 
 */
function createPlugin(pluginName, options) {
    let self = this;

    return self.each(function () {
        let instance = $.data(this, pluginName);
        
        if (!instance) {
            instance = new App(
                pluginName,
                $(this),
                $.extend(true, {}, options)
            );
            $.data(this, pluginName, instance);
        }
    });
}

/**
 * 
 * @param {*} args 
 */
function callMethodPlugin(pluginName, args, options) {
    args = Array.prototype.slice.call(args, 1);

    this.each(function () {
        let instance = $.data(this, pluginName);

        console.log(instance.prototype['test'].apply(instance));

        if (instance == null) {
            console.error(
                'The ' + pluginName + '(\'' + options + '\') method was called on an ' +
                'element that is not using ' + pluginName + '.'
            );
        }

        // return instance[options].apply(instance, args);
    });
}

export {
    createPlugin,
    callMethodPlugin
}