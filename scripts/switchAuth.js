const sign = document.getElementById('sign');
const login = document.getElementById('login');
let btnSign = document.getElementById('signBtn');
let btnLogin = document.getElementById('loginBtn');

document.addEventListener('DOMContentLoaded', () => {
	sign.classList.add('activeAuth');
	btnSign.classList.add('activeBtn');
});

btnSign.addEventListener('click', () => {
	sign.classList.add('activeAuth');
	login.classList.remove('activeAuth');

	btnSign.classList.add('activeBtn');
	btnLogin.classList.remove('activeBtn');
});
btnLogin.addEventListener('click', () => {
	sign.classList.remove('activeAuth');
	login.classList.add('activeAuth');

	btnSign.classList.remove('activeBtn');
	btnLogin.classList.add('activeBtn');
});
