const hamburger = document.querySelector('.navbar .nav-list .hamburger');
const mobile_menu = document.querySelector('.navbar ul');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});