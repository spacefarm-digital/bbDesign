// NPM dependencies
var $ = require('jquery')
var remodal = require('remodal')
var Flickity = require('flickity')
var simpleBar = require('simplebar')
var A11yDialog = require('a11y-dialog')

// Custom JS
var a11y = require('imports?$=jquery!./a11y')
var nav = require('imports?$=jquery!./nav')
var articleNav = require('imports?$=jquery!./articleNav')
var smoothScroll = require('imports?$=jquery!./smoothScroll')
var gallery = require('./gallery')
var backToTopHandler = require('imports?$=jquery!./backToTop')
var search = require('imports?$=jquery!./search')
var swipers = require('imports?$=jquery!./swipers')
var wizard = require('imports?$=jquery,Flickity=flickity!./wizard')
var modals = require('imports?A11yDialog=a11y-dialog!./modals')