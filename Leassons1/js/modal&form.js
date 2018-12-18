function form(){
    let body = document.querySelector('body'),
        overlay = document.querySelector('.popup_engineer'),
        popupCalc = document.querySelector('.popup_calc'),
        popupCalcProfile = document.querySelector('.popup_calc_profile'),
        popupCalcEnd = document.querySelector('.popup_calc_end'),
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
        inputTell = document.querySelectorAll('input[name="user_phone"]'),
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
		postData(formData)
			.then(()=>statusMessage.innerHTML = message.loading)
			.then(()=>statusMessage.innerHTML = message.success)
			.catch(() => statusMessage.innerHTML = message.failure);
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
}

module.exports = form;