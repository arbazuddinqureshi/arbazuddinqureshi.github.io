const element = document.querySelector('.menu-btn')
const navLinks = document.querySelector('.mob-nav-links')
element.addEventListener('click',()=>{
    navLinks.classList.toggle('none')
})