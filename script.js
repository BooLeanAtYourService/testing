// Toggle menu on small screens
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Add event listener to header
const header = document.querySelector('header');
header.addEventListener('mouseover', () => {
    header.style.backgroundColor = '#444';
});
header.addEventListener('mouseout', () => {
    header.style.backgroundColor = '';
});
