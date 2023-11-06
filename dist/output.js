window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const buttonToTop = document.querySelector('#button-to-top');


    if(window.scrollY > 20) {
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed')
    }

    if(window.scrollY > 100) {
        buttonToTop.classList.remove('scale-0');
        buttonToTop.classList.add('scale-1')
    }else {
        buttonToTop.classList.add('scale-0');
        buttonToTop.classList.remove('scale-1')
    }
})

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

