'use strict';

var app = app || {};
var utils = app.utils;

app.animations = (function() {

	var showName = function() {
		var contentContainer = document.getElementById('content');
		contentContainer.className += ' fadeContent';
	};

	var showPosition = function() {
		var positionContainer = document.getElementById('position');
		positionContainer.className += ' slidePosition';
	};

	var moveBackground = function() {
		document.addEventListener('mousemove', function (event) {
		    if (window.event) { // IE fix
		        event = window.event;
		    }

		    var mouseX = event.clientX;
		    var mouseY = event.clientY;
		    var body = document.getElementsByTagName('body')[0];
		    body.style.backgroundPosition = mouseX/3 + 'px ' + mouseY/3 + 'px';
		}, false);
	};

	var showSocial = function() {
		var socialNav = document.getElementById('socialNav');
		socialNav.addEventListener('click', function () {
		    var extensionContainer = document.getElementById('kExtension');
		    utils.toggleClass('active', extensionContainer);
		}, false);
	};

	var init = function() {
		showName();
		showPosition();
		moveBackground();
		showSocial();
	};

	return {
		init: init
	};
})();