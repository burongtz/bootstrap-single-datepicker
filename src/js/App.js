let App = (function () {
    let format = null;
    let formatUppercase = null;
    let $dpicker = null;

    function App(pluginName, $self, options) {
        this.$self = $self;
        this.options = $.extend({}, $.fn[pluginName].getDefaults(), options);

        $dpicker = $self.data('datepicker');
        format = $dpicker.o.format;
        formatUppercase = format.toUpperCase(format);

        addHTML($self, $dpicker.o.language);
        addEvents($self);
        onShowDpicker($self);
    }

    /**
     * 
     * @param {*} $self 
     */
    function onShowDpicker($self) {
        $self.datepicker().on('show', function(e) {
            let $picker = $dpicker.picker;

            $picker.off();

            $picker.on('click', '.datepicker-days .day', function(e) {
                let $target = $(e.currentTarget);
                let date = new Date($target.data('date'));
                let configDate = {
                    year: date.getUTCFullYear(),
                    month: date.getUTCMonth(),
                    date: date.getUTCDate()
                };
                let $years = $picker.find('#select-year');
                let $months = $picker.find('#select-month');

                $years.val(configDate.year);
                $months.val(configDate.month + 1);

                date = moment(configDate);
                $self.datepicker('setDate', date.format(formatUppercase));
            });
        });
    }

    /**
     * 
     * @param {*} $self 
     * @param {*} lang 
     */
    function addHTML($self, lang) {
        let $picker = $dpicker.picker,
            $pickerHead = $picker.find('thead'),
            $years = null,
            $months = null,
            newHTML = '',
            now = moment(),
            currentDate = null;
    
            if ($self.val() != '') {
                currentDate = moment($self.val(), formatUppercase);
            } else {
                currentDate = moment();
            }
    
            newHTML = '\
                <tr>\
                    <th colspan="100">\
                        <select id="select-year"></select>\
                        <select id="select-month"></select>\
                    </th>\
                </tr>\
            ';
        $pickerHead.find('tr:eq(1)')
            .after(newHTML);
        $pickerHead.find('.datepicker-switch').parent().hide();
        
        // Add years
        $years = $picker.find('#select-year');
        for (let i = 1850; i <= now.year(); i++) {
            let attr = { text: i };
    
            if (i === currentDate.year()) {
                attr['selected'] = 'selected';
            }
    
            $years.append($('<option>', attr));
        }
    
        // Add months
        $months = $picker.find('#select-month');
        for (let i = 0; i < 12; i++) {
            let attr = {
                value: i + 1,
                text: $.fn.datepicker.dates[lang]['months'][i]
             };
    
            if (i === currentDate.month()) {
                attr['selected'] = 'selected';
            }
    
            $months.append($('<option>', attr));
        }
    }

    /**
     * 
     * @param {*} $self 
     */
    function addEvents($self) {
        let $picker = $dpicker.picker,
            $years = null,
            $months = null;
    
        $years = $picker.find('#select-year');
        $months = $picker.find('#select-month');
    
        $years.on('change', function(e) {
            let newDate = moment();
    
            newDate.year(this.value);
            newDate.month($months.val() - 1);
            newDate.day(1);
    
            $self.datepicker('setDate', newDate.format(formatUppercase));
        });
    
        $months.on('change', function(e) {
            let newDate = moment();
    
            newDate.year($years.val());
            newDate.month(this.value - 1);
            newDate.day(1);
    
            $self.datepicker('setDate', newDate.format(formatUppercase));
        });
    }

    return App;
})();

export default App;