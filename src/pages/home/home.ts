import './home.scss'

// @ts-ignore
import worldSVG from '@/assets/world.svg'
// @ts-ignore
import faceSVG from '@/assets/face.svg?raw'

const world: HTMLImageElement = document.querySelector('img.world-icon')!
world.src = worldSVG

const face: SVGElement = document.querySelector('.face-icon')!
face.outerHTML = faceSVG

function addListener(element: Element, changeFunc: Function) {
    let ignore = false
    const callback = () => {
        if (ignore) return
        ignore = true
        const timeout = setTimeout(() => {
            element.removeEventListener('mouseover', callback)
            changeFunc()
        }, 200)

        element.addEventListener('mouseleave', () => {
            clearTimeout(timeout)
            ignore = false
        })
    }

    element.addEventListener('mouseover', callback)
}

const guaranteeDiv = document.querySelector('.guarantee-div')!
const percentEl = document.querySelector('span.percent')!
let num = 100
const decrementGuarantee = () => {
    percentEl.innerHTML = num - 1 + '%'
    num--
    if (num > 0) {
        setTimeout(decrementGuarantee, 5.5)
    } else {
        const guarantee = document.querySelector('span.guarantee')!
        guarantee.classList.add('expanded')
        guaranteeDiv.classList.add('done')
        setTimeout(() => {
            document.querySelector('span.we')!.innerHTML = 'We '
            ;(guarantee.innerHTML = "don't"), 200
        })
    }
}
addListener(guaranteeDiv, decrementGuarantee)
// setTimeout(decrement, 1400)

const returnDiv = document.querySelector('.return-div')!
const timeSpanEl = document.querySelector('span.time-span')!
const spans = ['Year', 'Month', 'Minute']
let index = 0
const changeReturn = () => {
    if (index < spans.length - 1)
        timeSpanEl.innerHTML = `<div class="move-out">${
            spans[index]
        }</div><div>${spans[index + 1]}</div>`
    else {
        timeSpanEl.innerHTML = `<div class="move-out"></div><div>${spans[index]}</div>`
        returnDiv.classList.add('done')
    }
    timeSpanEl.classList.add('goin')

    index++
    if (index < spans.length) {
        setTimeout(changeReturn, 220)
    }
}
addListener(returnDiv, changeReturn)
// setTimeout(change, 1950)
