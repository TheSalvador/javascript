function form() {
	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Cкоро мы с вами свяжемся',
		failure: 'Что-то пошло не так'
	};
	
	let form = document.querySelector('.main-form'),
		contantForm = document.querySelector('form'),
		input = form.querySelector('input'),
		inputs = contantForm.getElementsByTagName('input')[1],
		statusMessage = document.createElement('div');

		statusMessage.classList.add('status');
		input.addEventListener('input', function(){
			input.value = input.value.replace(/[^0-9+]/ig, '');
		});
		inputs.addEventListener('input', function(){
			inputs.value = inputs.value.replace(/[^0-9+]/ig, '');
		});
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
	}
	allForm(form);
	allForm(contantForm);
}
module.exports = form;