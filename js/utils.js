'use strict';

var app = app || {};

app.utils = (function () {
	var classExists = function(element, className) {
		var classList = element.className.split(' ');

		for (var i = 0; i < classList.length; i++) {
			if (classList[i] === className) {
				return true;
			}
		}

		return false;
	}

	var toggleClass = function(className, element) {
		if (classExists(element, className)) {
			element.className = element.className.replace(/\bactive\b/, '');
		}
		else {
			element.className += ' ' + className;
		}
	}

	return {
		toggleClass: toggleClass
	}
})(); 