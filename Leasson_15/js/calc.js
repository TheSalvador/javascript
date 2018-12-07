function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
		restDays = document.querySelectorAll('.counter-block-input')[1],
		plase = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

		totalValue.innerHTML = 0;

		const repl = (e) => {
			e.value = e.value.replace(/[^0-9]/ig, '');
			
		};
		let calc=() =>{
			daysSum = +restDays.value;
			personsSum = +persons.value;
			total = (daysSum * personsSum)*3000;
			if(restDays.value == '') {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
			if(restDays.value == '' || persons.value == '') {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total * plase.options[plase.selectedIndex].value;
			}
			repl(persons);
			repl(restDays);
		};
		persons.addEventListener('input', calc);
		restDays.addEventListener('input', calc);
		plase.addEventListener('change', calc);	
}
module.exports = calc;