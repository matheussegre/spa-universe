import { Router } from "./routes.js";
import * as elements from "./elements.js";

const router = new Router()
const body = document.querySelector('body')


router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

initElements()

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()



function pageHome(){
    body.classList.add('home')
    body.classList.remove('universe')
    body.classList.remove('exploration')
}

function pageUniverse(){
    body.classList.add('universe')
    body.classList.remove('home')
    body.classList.remove('exploration')
}

function pageExploration(){
    body.classList.add('exploration')
    body.classList.remove('universe')
    body.classList.remove('home')
}

function initElements(){
    elements.setHomeLogo.addEventListener('click', pageHome)
    elements.setHome.addEventListener('click', pageHome)
    elements.setUniverse.addEventListener('click', pageUniverse)
    // elements.setButtonUniverse.addEventListener('click', pageUniverse)
    elements.setExploration.addEventListener('click', pageExploration)
}
