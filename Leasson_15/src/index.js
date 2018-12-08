window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	let calc = require('../js/calc.js'),
		form = require('../js/form.js'),
		modal = require('../js/modal.js'),
		slider = require('../js/slider.js'),
		tabs = require('../js/tabs.js'),
		timer = require('../js/timer.js');

		calc();
		form();
		modal();
		tabs();
		slider();
		timer();
});
