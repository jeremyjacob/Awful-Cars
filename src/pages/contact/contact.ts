import './contact.scss'

const form = document.querySelector('form')!
form.addEventListener('submit', (event) => {
    event.preventDefault()
    form.innerHTML = "<h2>We'll be in touch soon!</h2>"
})

// @ts-ignore
import fbIMG from '@/assets/facebook.svg'
// @ts-ignore
import twitterIMG from '@/assets/twitter.svg'
// @ts-ignore
import instaIMG from '@/assets/insta.svg'

document.querySelector<HTMLImageElement>('img[alt="Facebook"]')!.src = fbIMG
document.querySelector<HTMLImageElement>('img[alt="Twitter"]')!.src = twitterIMG
document.querySelector<HTMLImageElement>('img[alt="Instagram"]')!.src = instaIMG
