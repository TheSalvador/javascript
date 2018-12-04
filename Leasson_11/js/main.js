window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	let tab = document.querySelectorAll('.info-header-tab'),
			info = document.querySelector('.info-header'),
			tabContent = document.querySelectorAll('.info-tabcontent');

	let hideTabContent = (a)=> {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	};

	hideTabContent(1);

	let showTabContent = (b)=> {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	};

	info.addEventListener('click', (event) => {
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
	let deadLine = "2018.12.28";
	let getTimeRemaining = (endtime) => {
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
	};
	let setClock = (id, endtime) => {
		let timer = document.getElementById(id),
				hour = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				second = timer.querySelector('.seconds');
				

			let updateClock = () => {
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
		};
		let timeInterval = setInterval(updateClock, 1000);
		updateClock();
	};
	setClock('timer', deadLine);
// modal
	let	infos = document.querySelector('body'),
		btn = document.querySelector('.more'),
		overlay = document.querySelector('.overlay');

	infos.addEventListener('click', (event) => {
		let target = event.target;
		if (target && target.classList.contains('more') || target.classList.contains('description-btn')){
			overlay.style.display = 'block';
			btn.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		}
		if (target && target.classList.contains('popup-close')){
			overlay.style.display = 'none';
			btn.classList.remove('more-splash');
			document.body.style.overflow = '';
		}
	});

	//form
	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Cкоро мы с вами свяжемся',
		failure: 'Что-то пошло не так'
	};
	
	let form = document.querySelector('.main-form'),
		input = form.querySelector('input'),
		statusMessage = document.createElement('div');

		statusMessage.classList.add('status');
		input.addEventListener('input', function(){
			input.value = input.value.replace(/[^0-9+]/ig, '');
		});
	form.addEventListener('submit', function(e) {
		e.preventDefault();
		form.appendChild(statusMessage);

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		// request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

		let formData = new FormData(form);
		let obj ={};
		formData.forEach(function(value, key) {
			obj[key] = value;
		});
		let json = JSON.stringify(obj);
		request.send(json);
		// request.send(formData);

		request.addEventListener('readystatechange', function(){
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if(request.readyState === 4 && request.status == 200) {
				statusMessage.innerHTML = message.success;
			} else {
				statusMessage.innerHTML = message.failure;
			}
		});

			for (let i = 0; i<input.length; i++) {
				input[i].value = '';
			}
	});
});
