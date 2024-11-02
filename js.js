let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');   // Toggles the icon class
    navbar.classList.toggle('active'); // Toggles the active class for the navbar
}

window.onscroll = () => {
    menu.classList.remove('bx-x');   // Removes the icon class on scroll
    navbar.classList.remove('active'); // Removes the active class on scroll
}
