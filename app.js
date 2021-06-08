console.log(' Welcome sam');
const title = document.querySelector('.title');
const wish = document.querySelector('h1');
const wishImg = document.querySelector('.wish-img');
let now;
let countDate;

const contDown = setInterval(function () {
	countDate = new Date('Jun 10 , 2021 00:00:00').getTime();
	now = new Date('Jun 10, 2021 00:00:00').getTime();
	// console.log(now);
	// console.log(countDate);
	const gap = countDate - now;
	// console.log(gap);

	//calculating time
	const seconds = 1000;
	const minutes = seconds * 60;
	// console.log(minutes);
	const hours = minutes * 60;
	// console.log(hours);
	const day = hours * 24;
	// console.log(day);

	//
	const textDay = Math.floor(gap / day);
	// console.log(textDay, 'days');
	const textHour = Math.floor((gap % day) / hours);
	// console.log(textHour);
	const textMinute = Math.floor((gap % hours) / minutes);
	// console.log(textMinute);
	const textSecond = Math.floor((gap % minutes) / seconds);
	// console.log(textSecond);

	document.querySelector('.day').innerText = textDay;
	document.querySelector('.hour').innerText = textHour;
	document.querySelector('.minutes').innerText = textMinute;
	document.querySelector('.seconds').innerText = textSecond;

	console.log(gap);
	wish.classList.add('wish');
	if (now == countDate) {
		title.innerHTML = '<style = display:none></style>';
		title.innerText = 'My Self';
		wish.innerText = 'Happy Birthday To';
		wishImg.innerHTML = '';
		wishImg.src = './img/23912-tractor-with-gifts.gif';
		clearInterval(contDown);
	} else if (now > countDate) {
		wish.innerText = 'Time is not set fucker';
		title.innerHTML = '';
		wishImg.src = './img/57438-waiter.gif';
		clearInterval(contDown);
	}
}, 1000);
