const navbar = document.querySelector('.navbar')

window.onscroll = () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scroll-navbar')
    } else {
        navbar.classList.remove('scroll-navbar')
    }
}