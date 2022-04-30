const  openMenu = document.getElementById("mobile-cta");
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit');
const btn = document.querySelector('.btn');
const date = document.querySelector('.date');


openMenu.addEventListener('click', () => {
     nav.classList.add('menu-btn');
});

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
});

date.textContent = new Date().getFullYear();