const navbar = document.querySelector('.navbar')
const changeColor1 = document.querySelector('.a-color1')
const changeColor2 = document.querySelector('.a-color2')
const changeColor3 = document.querySelector('.a-color3')
const changeColor4 = document.querySelector('.a-color4')

window.onscroll = () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scroll-navbar')
        changeColor1.classList.add('change-a-color')
        changeColor2.classList.add('change-a-color')
        changeColor3.classList.add('change-a-color')
        changeColor4.classList.add('change-a-color')
    } else {
        navbar.classList.remove('scroll-navbar')
        changeColor1.classList.remove('change-a-color')
        changeColor2.classList.remove('change-a-color')
        changeColor3.classList.remove('change-a-color')
        changeColor4.classList.remove('change-a-color')
    }
}