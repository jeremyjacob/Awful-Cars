import './style.scss'
import './lib/all'

// @ts-ignore - to get intellisense to shut up
import homeHTML from './pages/home/home.html?raw'
// @ts-ignore - to get intellisense to shut up
import carsHTML from './pages/cars/cars.html?raw'
// @ts-ignore - to get intellisense to shut up
import contactHTML from './pages/contact/contact.html?raw'

// Render pages
const [home, cars, contact] =
    document.querySelectorAll<HTMLDivElement>('#app>div>main')!
home.innerHTML = homeHTML
cars.innerHTML = carsHTML
contact.innerHTML = contactHTML

// Run page scripts
import('navbar/navbar')
import('home/home')
import('cars/cars')
import('contact/contact')

// document.querySelector('scroller')!.setAttribute('scrollY')
