'use strict';

//modal
    let body = document.querySelector('body'),
        overlay = document.querySelector('.popup_engineer'),
        popupCalc = document.querySelector('.popup_calc'),
        popupCalcProfile = document.querySelector('.popup_calc_profile'),
        popupCalcEnd = document.querySelector('.popup_calc_end'),
        closeBtn = document.querySelector('.popup_close'),
        overlayTell = document.querySelector('.popup');

        closeBtn = addEventListener("click", function (event) {
            if (event.target && event.target.tagName == "STRONG") {
                overlay.style.display = 'none';
                overlayTell.style.display = 'none';
                popupCalc.style.display = 'none';
                popupCalcProfile.style.display = 'none';
                popupCalcEnd.style.display = 'none';
                document.body.style.overflow = '';
            }
            if (event.target == overlay||event.target == overlayTell) {
                overlay.style.display = "none";
                overlayTell.style.display = 'none';
                document.body.style.overflow = '';
            }
        });

    body.addEventListener('click', (e)=>{
        let target = e.target;
        if (target && target.classList.contains('header_btn')){
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        if (target && target.classList.contains('popup_calc_button')){
            popupCalcProfile.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        if(target && target.classList.contains('phone_link')){
            overlayTell.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        if (target && target.classList.contains('glazing_price_btn')){
            popupCalc.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        if(target && target.classList.contains('popup_calc_profile_button')){
            popupCalcEnd.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
//form
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Cкоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    };
    let form = document.querySelector('form'),
        popupForm2 = document.querySelectorAll('.form')[1],
        popupFormModal = document.querySelectorAll('.form')[7],
        popupForm5 = document.querySelectorAll('.form')[5],
        popupFormModalTell = document.querySelectorAll('.form')[6],
        popupFormModalCalcEnd = document.querySelectorAll('.form')[8],
        inputForm = form.querySelectorAll('input')[1],
        inputForm2 = document.querySelectorAll('input')[3],
        inputPopupFormModal = document.querySelectorAll('input')[15],
        inputPopupFormModalTell = document.querySelectorAll('input')[13],
        inputPopupFormModalCalcWidth = document.querySelectorAll('input')[16],
        inputPopupFormModalCalcHight = document.querySelectorAll('input')[17],
        inputPopupFormModalCalcEnd = document.querySelectorAll('input')[21],
        input = document.querySelectorAll('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');
        // inputForm.addEventListener('input', ()=>{
        //     inputForm.value = inputForm.value.replace(/[^0-9+]/ig, '');
        // });

        const repl = (e) => {
			e.value = e.value.replace(/[^d]/ig, '');
			
        };
        repl(inputForm);
        
        function allForm(form) {
			form.addEventListener('submit', function(e) {
			e.preventDefault();
			form.appendChild(statusMessage);

			let formData = new FormData(form);
			let obj ={};
			formData.forEach(function(value, key) {
				obj[key] = value;
			});
			let json = JSON.stringify(obj);

			function postData() {
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
	}
	function clearInp() {
		statusMessage.innerHTML = '';
    }
    allForm(form);
    allForm(popupForm2);
    allForm(popupFormModal);
    allForm(popupForm5);
    allForm(popupFormModalTell);
    allForm(popupFormModalCalcEnd);

//timer
    let deadLine = '2018.12.31';
    let getTimeRemaining = (endtime) => {
		let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
			minutes = Math.floor((t/1000/60) % 60),
            hour = Math.floor((t/(1000*60*60))%24),
            days = Math.floor(t / (1000 * 60 * 60 * 24));
			
			return {
                'total' : t,
                'days' : days,
				'hours' : hour,
				'minutes' : minutes,
				'seconds' : seconds
			};
	};
	let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
			hour = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');
				

			let updateClock = () => {
            let t = getTimeRemaining(endtime);
                    days.innerHTML = t.days;
					hour.innerHTML = ('0' + t.hours).slice(-2);
					minutes.innerHTML = ('0' + t.minutes).slice(-2);
					seconds.innerHTML = ('0' +  t.seconds).slice(-2);
					if (t.total <=0) {
                        clearInterval(timeInterval);
                        document.querySelector('.days').innerHTML = '00';
						document.querySelector('.hours').innerHTML = '00';
						document.querySelector('.minutes').innerHTML = '00';
						document.querySelector('.seconds').innerHTML = '00';
			}
		};
		let timeInterval = setInterval(updateClock, 1000);
		updateClock();
	};
    setClock('timer', deadLine);
    //tab
let tab = document.querySelectorAll('.glazing_block'),
    slider = document.querySelector('.glazing_slider'),
    content = document.querySelector('.aluminum');

    let hideTabContent = (a)=> {
        for (let i = a; i < content.length; i++) {
            content[i].classList.remove('show');
            content[i].classList.add('hide');
        }
    };
    
    hideTabContent(2);
    
    let showTabContent = (b)=> {
        if (content[b].classList.contains('hide')) {
            content[b].classList.remove('hide');
            content[b].classList.add('show');
        }
    };
    
    slider.addEventListener('click', (event) => {
        let target = event.target;
            if (target && target.classList.contains('glazing_block')) {
                for(let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });

    // setTimeout(modal, 60000);
    // function modal(){
    //     overlay.style.display = 'block';
    // }




