window.addEventListener('DOMContentLoaded', function() {
	'use strict';
	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for(let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});
//Timer
	let deadLine = "2018.11.28";
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			second = Math.floor((t/1000) % 60),
			minutes = Math.floor((t/1000/60) % 60),
			hour = Math.floor((t/(1000*60*60)));
			
			return {
				'total' : t,
				'hours' : hour,
				'minutes' : minutes,
				'seconds' : second
			};
	}
	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hour = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			second = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endtime);
					hour.innerHTML = ('0' + t.hours).slice(-2);
					minutes.innerHTML = ('0' + t.minutes).slice(-2);
					second.innerHTML = ('0' +  t.seconds).slice(-2);
					if (t.total <=0) {
						clearInterval(timeInterval);
						document.querySelector('.hours').innerHTML = '00';
						document.querySelector('.minutes').innerHTML = '00';
						document.querySelector('.seconds').innerHTML = '00';
			}
		}
		updateClock();
	}
	// let deadLine = new Date(Date.parse(new Date())+15*60*60*1000);
		// let deadLine = "2018.11.28";
	setClock('timer', deadLine);
});