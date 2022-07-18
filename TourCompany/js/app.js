// select buttons and links
const navBtn = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
const heroBtn = document.getElementById('hero-btn');
const navbar = document.getElementById('navbar');
const aboutUs = document.getElementById('about');

// ********** set date ************

// select span
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear());

// ********** nav toggle ************

// add event listener
navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links');
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault();
    links.classList.remove('show-links');

    const id = e.target.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;
    console.log(position);
    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
  });
});

// const s = () => {
//   if (window.scrollY > 250) {
//     console.log(window.scrollY);
//   }
// };

// s();

window.addEventListener('scroll', () => {
  let getScrollY = window.scrollY;
  if (getScrollY > 666) {
    navbar.classList.add('hideNav');
    if (navbar.classList.contains('hideNav')) {
      return;
    }
  } else {
    navbar.classList.remove('hideNav');
  }
});
