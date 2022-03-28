/*=============== LOADER ===============*/

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validação se constante existe */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validação se constante existe */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Quando clicamos em cada nav__link, removemos a classe show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // Quando a rolagem for maior que 50 de altura da janela de visualização, 
    // adicione a classe scroll-header à tag header
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== MIXITUP FILTER PRODUCTS ===============*/
let mixerProducts = mixitup(".products__content", {
    selectors: {
        target: ".products__card"
    },
    animation: {
        duration: 300
    }
});

/* Default filter products */
mixerProducts.filter(".delicacies");

/* Link active products */
const linkProducts = document.querySelectorAll('.products__item')

function activeProducts(){
    linkProducts.forEach(l => l.classList.remove('active-product'))
    this.classList.add('active-product')
}

linkProducts.forEach(l => l.addEventListener('click', activeProducts))
/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
