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

    setTimeout(modal, 60000);
    function modal(){
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';

    }

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




