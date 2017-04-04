const timePicker = document.querySelector('#js-timePicker');
const Bulgarian = require("./dateTime-bg").bg;

const options = {
    // enableTime: true,
    // mode: 'range',
    nextArrow: '→',
    prevArrow: '←',
    allowInput: true,
    dateFormat: 'd-m-Y',
    inline: true,
    "locale": Bulgarian,

}
// Week starts on Monday
Flatpickr.l10ns.default.firstDayOfWeek = 1;

new Flatpickr(timePicker, options);
