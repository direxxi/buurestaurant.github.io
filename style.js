let menu = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    navbar.classList.remove('active');
};
