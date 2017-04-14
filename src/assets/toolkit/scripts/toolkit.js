var $ = require('jquery');
var nav = require('imports?$=jquery!./nav');
var remodal = require('remodal');
var Flickity = require('flickity');
var articleNav = require('imports?$=jquery!./articleNav');
var search = require('imports?$=jquery!./search');
var swipers = require('imports?$=jquery!./swipers');
var smoothScroll = require('imports?$=jquery!./smoothScroll');
var wizard = require('imports?$=jquery,Flickity=flickity!./wizard');
var gallery = require('./gallery');
var simpleBar = require('simplebar');
var backToTopHandler = require('imports?$=jquery!./backToTop');

// Date/time picker
var Flatpickr = require('flatpickr');
var dateTimePicker = require('imports?Flatpickr=flatpickr!./dateTimePicker.js');var a11y = require('imports?$=jquery!./a11y')
