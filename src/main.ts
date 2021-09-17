import './style.scss'
import './lib/all'

// @ts-ignore - to get intellisense to shut up
import home from './pages/home/home.html?raw'

// Render pages
const main = document.querySelector<HTMLDivElement>('#app > main')!
main.innerHTML = home

// Run page scripts
import('navbar/navbar')
import('home/home')
