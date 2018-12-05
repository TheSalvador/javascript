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

		let formData = new FormData(form);
		let obj ={};
		formData.forEach(function(value, key) {
			obj[key] = value;
		});
		let json = JSON.stringify(obj);

		function postData(data) {
			return new Promise(function(resolve, reject) {
				let request = new XMLHttpRequest();
				request.open('POST', 'server.php');
				request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
				request.onreadystatechange = function() {
					if (request.readyState < 4) {
						resolve();
					} else if (request.readyState === 4 && request.status == 200){
						resolve();
					} else {
						reject();
					}
				};
				request.send(json);
			});
		}
		function clearInput() {
			for (let i = 0; i<input.length; i++) {
				input[i].value = '';
			}
		}
		postData(formData)
			.then(()=>statusMessage.innerHTML = message.loading)
			.then(()=>statusMessage.innerHTML = message.success)
			.catch(() => statusMessage.innerHTML = message.failure)
			.then(clearInput);

	});
	//slider

	let slideIndex = 1,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dots = document.querySelector('.slider-dots'),
		dot = document.querySelectorAll('.dot');
	showSlides(slideIndex);
	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		slides.forEach((item) => item.style.display = 'none');
		// for (let i =0; i<slides.length; i++) {
		// 	slides[i].style.display = 'none';
		// }
		dot.forEach((item) => item.classList.remove('dot-active'));

		slides[slideIndex - 1].style.display = 'block';
		dot[slideIndex - 1].classList.add('dot-active');
	}
	function pluseSlides(n) {
		showSlides(slideIndex += n);
	}
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}
	prev.addEventListener('click', ()=> {
		pluseSlides(-1);
	});
	next.addEventListener('click', ()=> {
		pluseSlides(1);
	});
	dots.addEventListener('click', (e)=> {
		for (let i = 0; i < dot.length + 1; i++) {
			if (e.target.classList.contains('dot') && e.target == dot[i-1]) {
				currentSlide(i);
			}
		}
	});
	//calc
	let persons = document.querySelectorAll('.counter-block-input')[0],
		restDays = document.querySelectorAll('.counter-block-input')[1],
		plase = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

		totalValue.innerHTML = 0;

		persons.addEventListener('input', function(){
			persons.value = persons.value.replace(/[^0-9]/ig, '');
		});
		persons.addEventListener('change', function() {
			personsSum = +this.value;
			total = (daysSum + personsSum)*3000;
			if(restDays.value == '') {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		});
		restDays.addEventListener('input', function(){
			restDays.value = restDays.value.replace(/[^0-9]/ig, '');
		});
		restDays.addEventListener('change', function() {
			daysSum = +this.value;
			total = (daysSum + personsSum)*3000;
			if(restDays.value == '' || persons.value == '') {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		});

		plase.addEventListener('change', function(){
			if(restDays.value == '' || persons.value == '') {
				totalValue.innerHTML = 0;
			} else {
				let a = total;
				totalValue.innerHTML = a * this.options[this.selectedIndex].value;
			}
		});
});
