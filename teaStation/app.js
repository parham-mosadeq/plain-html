const dateSpan = document.getElementById('year');
const navBtn = document.getElementById('nav-btn');
const mobileMenu = document.querySelector('.side-menu-mobile');

// setting year in footer
const date = new Date().getFullYear().toString();
dateSpan.innerHTML = date;

// opening and closing side menu

navBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  console.log(mobileMenu);
});
