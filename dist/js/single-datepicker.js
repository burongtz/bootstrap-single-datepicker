!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("singleDatepicker",[],t):"object"==typeof exports?exports.singleDatepicker=t():e.singleDatepicker=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={},r=function(){var e=null,t=null,n=null;return function(o,r,a){this.$self=r,this.options=$.extend({},$.fn[o].getDefaults(),a),n=r.data("datepicker"),e=n.o.format,t=e.toUpperCase(e),function(e,o){var r=n.picker,a=r.find("thead"),i=null,l=null,c="",f=moment(),u=null;u=""!=e.val()?moment(e.val(),t):moment(),c='                <tr>                    <th colspan="100">                        <select id="select-year"></select>                        <select id="select-month"></select>                    </th>                </tr>            ',a.find("tr:eq(1)").after(c),a.find(".datepicker-switch").parent().hide(),i=r.find("#select-year");for(var s=1850;s<=f.year();s++){var d={text:s};s===u.year()&&(d.selected="selected"),i.append($("<option>",d))}l=r.find("#select-month");for(var p=0;p<12;p++){var y={value:p+1,text:$.fn.datepicker.dates[o].months[p]};p===u.month()&&(y.selected="selected"),l.append($("<option>",y))}}(r,n.o.language),function(e){var o=n.picker,r=null,a=null;r=o.find("#select-year"),a=o.find("#select-month"),r.on("change",function(n){var o=moment();o.year(this.value),o.month(a.val()-1),o.day(1),e.datepicker("setDate",o.format(t))}),a.on("change",function(n){var o=moment();o.year(r.val()),o.month(this.value-1),o.day(1),e.datepicker("setDate",o.format(t))})}(r),function(e){e.datepicker().on("show",function(o){var r=n.picker;r.off(),r.on("click",".datepicker-days .day",function(n){var o=$(n.currentTarget),a=new Date(o.data("date")),i={year:a.getUTCFullYear(),month:a.getUTCMonth(),date:a.getUTCDate()},l=r.find("#select-year"),c=r.find("#select-month");l.val(i.year),c.val(i.month+1),a=moment(i),e.datepicker("setDate",a.format(t))})})}(r)}}();function a(e,t){return this.each(function(){var n=$.data(this,e);n||(n=new r(e,$(this),$.extend(!0,{},t)),$.data(this,e,n))})}function i(e,t,n){t=Array.prototype.slice.call(t,1),this.each(function(){var t=$.data(this,e);console.log(t.prototype.test.apply(t)),null==t&&console.error("The "+e+"('"+n+"') method was called on an element that is not using "+e+".")})}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){var t="singleDatepicker";null==e.fn[t]&&(e.fn[t]=function(e){return e||(e={}),"object"===(void 0===e?"undefined":l(e))?a.call(this,t,e):"string"==typeof e&&"_"!==e[0]?i.call(this,t,arguments,e):void 0}),e.fn[t].getDefaults=function(){return o}}(jQuery)}])});