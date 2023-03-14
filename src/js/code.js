//active underline
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('a')
navLinks.forEach(link => {
	if (link.href.includes(`${activePage}`)) {
		link.classList.add('active');
	}
});

//Burger Menu
function showActive(el) {
	el.classList.toggle('active');
	document.getElementById('navbar').classList.toggle('show');
}

//hidden navbar
const nav = document.getElementById('nav');

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
	if (lastScrollY < window.scrollY) {
		nav.classList.add('nav-hide');
	}
	else {
		nav.classList.remove('nav-hide');
	}
	lastScrollY = window.scrollY;
})