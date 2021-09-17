import './home.scss'

// @ts-ignore
import worldSVG from '@/assets/world.svg'
// @ts-ignore
import faceSVG from '@/assets/face.svg?raw'

const world: HTMLImageElement = window.$('.world-icon')!
world.src = worldSVG

const face: SVGElement = window.$('.face-icon')!
face.outerHTML = faceSVG
