function modal() {
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
}
module.exports = modal;