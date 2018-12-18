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
            showModal(overlay);
        }
        if (target && target.classList.contains('popup_calc_button')){
            showModal(popupCalcProfile);
        }
        if(target && target.classList.contains('phone_link')){
            showModal(overlayTell);
        }
        if (target && target.classList.contains('glazing_price_btn')){
            showModal(popupCalc);
        }
        if(target && target.classList.contains('popup_calc_profile_button')){
            showModal(popupCalcEnd);
        }
    });
    function showModal (elem) {
        elem.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
//form
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Cкоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    };
    let form = document.querySelector('form'),
        // popupForm2 = document.querySelectorAll('.form')[1],
        // popupFormModal = document.querySelectorAll('.form')[7],
        // popupForm5 = document.querySelectorAll('.form')[5],
        // popupFormModalTell = document.querySelectorAll('.form')[6],
        // popupFormModalCalcEnd = document.querySelectorAll('.form')[8],
        inputTell = document.querySelectorAll('input[name="user_phone"]'),
        // inputSize = document.querySelectorAll('input[name="size"]'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');
        
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
			// function clearInput() {
			// 	for (let i = 0; i<input.length; i++) {
			// 		input[i].value = '';
			// 	}
			// }
		postData(formData)
			.then(()=>statusMessage.innerHTML = message.loading)
			.then(()=>statusMessage.innerHTML = message.success)
			.catch(() => statusMessage.innerHTML = message.failure);
			// .then(clearInput);
        });
	}
	function clearInp() {
		statusMessage.innerHTML = '';
    }
    // allForm(form);
    // allForm(popupForm2);
    // allForm(popupFormModal);
    // allForm(popupForm5);
    // allForm(popupFormModalTell);
    // allForm(popupFormModalCalcEnd);
    [...form].forEach(function (element) {
		allForm(element);
	});
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
    slider = document.querySelector('body'),
    tabActive = document.querySelectorAll('.tab_active'),
    content = document.querySelectorAll('.tab_content');

    let hideTabContent = (a)=> {
        for (let i = a; i < content.length; i++) {
            content[i].classList.remove('show');
            content[i].classList.add('hide');
            tabActive[i].classList.remove('active');
        }
    };
    
    hideTabContent(1);
    
    let showTabContent = (b)=> {
        if (content[b].classList.contains('hide')) {
            tabActive[b].classList.add('active');
            content[b].classList.remove('hide');
            content[b].classList.add('show');
        }
    };
    slider.addEventListener('click', (event) => {
        let target = event.target;

        if (target && target.classList.contains("glazing_block") || target.parentNode.classList.contains("glazing_block")) {
            [...tab].forEach(function (event, i) {
                if (target == event || target.parentNode == event) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            });
        }
        });
//2


        let tabs = document.querySelectorAll('.afterclick'),
            sliders = document.querySelector('.decoration_slider'),
            clickS = document.querySelectorAll('.no_click'),
            contents = document.querySelectorAll('.tab_contents');
        
            let hideTabContents = (a)=> {
                for (let i = a; i < contents.length; i++) {
                    contents[i].classList.remove('show');
                    contents[i].classList.add('hide');
                    clickS[i].classList.remove('after_click');
                }
            };
            
            hideTabContents(1);
            
            let showTabContents = (b)=> {
                if (contents[b].classList.contains('hide')) {
                    contents[b].classList.remove('hide');
                    contents[b].classList.add('show');
                    clickS[b].classList.add('after_click');
                }
            };
            
            sliders.addEventListener('click', (event) => {
                let target = event.target;
        
                if (target && target.classList.contains("afterclick") || target.parentNode.classList.contains("afterclick")) {
                    [...tabs].forEach(function (event, i) {
                        if (target == event || target.parentNode == event) {
                            hideTabContents(0);
                            showTabContents(i);
                        }
                    });
                }
                });

    // setTimeout(modal, 60000);
    // function modal(){
    //     overlay.style.display = 'block';
    //     document.body.style.overflow = 'hidden';
    // }


    function block(input) {
        input.oninput = function(){
            return (this.value = this.value.replace(/[^0-9]/g, ""));
        };
    }
    [...inputTell].forEach(elem=> block(elem));


    // let images = document.getElementsByTagName('img');
    //     images=addEventListener('click', function(){
    //         document.body.style.background = 'red';
    //     });

    //     console.log(images);
        

