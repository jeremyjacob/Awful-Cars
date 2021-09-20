import './navbar.scss'

// @ts-ignore
import faceSVG from '@/assets/face.svg?raw'
// @ts-ignore
import wheelSVG from '@/assets/wheel.svg?raw'

const scroller = document.querySelector('#scroller')!
const logo = document.querySelector('svg.face-logo')!
logo.outerHTML = wheelSVG

const navButtons = document.querySelectorAll('#nav-buttons a')!
const clearNav = () => navButtons.forEach((e) => e.classList.remove('selected'))
navButtons.addEventListener('click', (event) => {
    clearNav()

    const target = <Element>event.target!
    target.classList.add('selected')
    let top = 0
    if (target.innerHTML == 'Cars') top = 761
    if (target.innerHTML == 'Contact') top = 1549
    console.log(target.innerHTML)
    scroller.scrollTo({ top, behavior: 'smooth' })
})

let page = 0
scroller.addEventListener('scroll', () => {
    const oldPage = page
    const scroll = scroller.scrollTop
    if (scroll < 393) page = 2
    else if (scroll > 393 && scroll < 1167) page = 1
    else if (scroll > 1167) page = 0

    if (page != oldPage) clearNav()
    navButtons[page].classList.add('selected')
})
