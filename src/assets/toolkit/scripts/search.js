// Variables
var searchLink = $('#search-link')
    searchIcon = $('#search-icon')
    searchClose = $('#search-close');

/*
 * jQuery Function Toggle Pluing
 * Copyright 2011, Felix Kling
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

;(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}) (function($) {
    $.fn.funcToggle = function(type, data) {
        var dname = "jqp_eventtoggle_" + type + (new Date()).getTime(),
            funcs = Array.prototype.slice.call(arguments, 2),
            numFuncs = funcs.length,
            empty = function() {},
            false_handler = function() {return false;};

        if(typeof type === "object") {
            for( var key in type) {
                $.fn.funcToggle.apply(this, [key].concat(type[key]));
            }
            return this;
        }
        if($.isFunction(data) || data === false) {
            funcs = [data].concat(funcs);
            numFuncs += 1;
            data = undefined;
        }

        funcs = $.map(funcs, function(func) {
            if(func === false) {
                return false_handler;
            }
            if(!$.isFunction(func)) {
                return empty;
            }
            return func;
        });

        this.data(dname, 0);
        this.bind(type, data, function(event) {
            var data = $(this).data(),
                index = data[dname];
            funcs[index].call(this, event);
            data[dname] = (index + 1) % numFuncs;
        });
        return this;
    };
});


var showSearch = function(event) {
  event.preventDefault();
  $("#sections").addClass('down-self');
  $("#search-bar").removeClass('up-self');
  searchIcon.addClass('scale-0');
  setTimeout(function() {
    searchClose.removeClass('scale-0');
  }, 150);
}

var hideSearch = function(event) {
  event.preventDefault();
  $("#sections").removeClass('down-self');
  $("#search-bar").addClass('up-self');
  searchClose.addClass('scale-0');
  setTimeout(function() {
    searchIcon.removeClass('scale-0');
  }, 150);
}

searchLink.funcToggle('click', function(event) {
    showSearch(event);
}, function(event) {
    hideSearch(event);
});

// Hide the search bar
$(document).keydown(function(event) {
  if (event.keyCode == 27) {
    hideSearch(event);
  }
});
