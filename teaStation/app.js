const dateSpan = document.getElementById('year');
const navBtnOpen = document.getElementById('nav-btn');
const navBtnClose = document.getElementById('nav-close');
const mobileMenu = document.querySelector('.navbar');

// setting year in footer
const date = new Date().getFullYear().toString();
dateSpan.innerHTML = date;

// opening and closing side menu

navBtnOpen.addEventListener('click', () => {
  mobileMenu.classList.add('showNav');
});

navBtnClose.addEventListener('click', () => {
  mobileMenu.classList.remove('showNav');
});
