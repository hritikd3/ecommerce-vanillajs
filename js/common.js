const logoutBtn = document.getElementById('logoutBtn');
const userIntro = document.getElementById("userIntro");

logoutBtn.addEventListener('click', logoutFn);

function logoutFn() {
	localStorage.removeItem('username');
	window.location.href = "login.html";
}

if (!localStorage.getItem('username')) {
	window.location.href = "login.html";
} else {
	userIntro.innerText = "Hi " + localStorage.getItem('username');
}