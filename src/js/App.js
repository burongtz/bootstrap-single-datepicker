let App = (function () {
    let format = null;
    let formatUppercase = null;

    function App(pluginName, $self, options) {
        this.$self = $self;
        this.options = $.extend({}, $.fn[pluginName].getDefaults(), options);

        let $dpicker = $self.data('datepicker');
        format = $dpicker.o.format;
        formatUppercase = format.toUpperCase(format);

        addHTML($self, $dpicker);
        addEvents($self, $dpicker);
        onShowDpicker($self, $dpicker);
    }

    /**
     * 
     * @param {*} $self 
     */
    function onShowDpicker($self, $dpicker) {
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
    function addHTML($self, $dpicker) {
        let $picker = $dpicker.picker,
            $pickerHead = $picker.find('thead'),
            $years = null,
            $months = null,
            newHTML = '',
            minYears = 1850,
            maxYears = 2030,
            currentDate = null,
            lang = $dpicker.o.language;
    
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
        $pickerHead.find('.datepicker-switch')
            .parent()
            .hide();
        $picker.addClass('single-datepicker');

        if ($self.data('years-min') !== void 0) {
            minYears = parseInt($self.data('years-min'));
        }

        if ($self.data('years-max') !== void 0) {
            maxYears = parseInt($self.data('years-max'));
        }
        
        // Add years
        $years = $picker.find('#select-year');
        for (let i = minYears; i <= maxYears; i++) {
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
    function addEvents($self, $dpicker) {
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