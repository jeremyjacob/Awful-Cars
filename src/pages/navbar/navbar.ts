import './navbar.scss'

// @ts-ignore
import faceSVG from '@/assets/face.svg?raw'
// @ts-ignore
import wheelSVG from '@/assets/wheel.svg?raw'

const logo = window.$('svg.face-logo')!
logo.outerHTML = wheelSVG

const navButtons = window.$$('#nav-buttons a')!
navButtons.addEventListener('click', (event) => {
    navButtons.forEach((e) => e.classList.remove('selected'))

    const target = <Element>event.target!
    target.classList.add('selected')
})
