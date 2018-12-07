function slider() {
    let slideIndex = 1,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dots = document.querySelector('.slider-dots'),
		dot = document.querySelectorAll('.dot');
	
	let showSlides = (n)=> {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		slides.forEach((item) => item.style.display = 'none');
		dot.forEach((item) => item.classList.remove('dot-active'));

		slides[slideIndex - 1].style.display = 'block';
		dot[slideIndex - 1].classList.add('dot-active');
	};
	showSlides(slideIndex);
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
}
module.exports = slider;