function timer() {
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
}
module.exports = timer;