import { Buttons } from "./buttons.js";
import { Brain } from "./brain.js";
import { ambientSound } from "./ambient.js";


const minuteHand = document.querySelector('#minutes')
const secondHand = document.querySelector('#seconds')
let timerOut

const buttons = Buttons()
const setButtons ={
    Play : buttons.playClock,
    Stop : buttons.stopClock,
    More : buttons.moreTime,
    Less : buttons.lessTime,
    
    florest : buttons.florest,
    rain : buttons.rain,
    coffeeshop : buttons.coffeeshop,
    bonfire : buttons.bonfire,
    
    sun: buttons.Mode.sun,
    moon:buttons.Mode.moon
}
const brain = Brain({ 
    minuteHand,
    secondHand,
    timerOut,
    setButtons
})

const ambient = ambientSound()

// controles
setButtons.Play.addEventListener('click', brain.starterClock)
setButtons.Stop.addEventListener('click', brain.finishClock)
setButtons.More.addEventListener('click',  brain.controlTime)
setButtons.Less.addEventListener('click',  brain.controlTime)

// musica ambiente
setButtons.florest.addEventListener('click',ambient.florestSong)
setButtons.rain.addEventListener('click',ambient.rainSong)
setButtons.coffeeshop.addEventListener('click',ambient.coffeeShopSong)
setButtons.bonfire.addEventListener('click',ambient.bonfireSong)

// volume das musica
setButtons.florest.addEventListener('input', ambient.Volume)
setButtons.rain.addEventListener('input', ambient.Volume)
setButtons.coffeeshop.addEventListener('input', ambient.Volume)
setButtons.bonfire.addEventListener('input', ambient.Volume)

// seleciona a musica
setButtons.florest.addEventListener('click', brain.selectFlorest)
setButtons.rain.addEventListener('click',brain.selectRain)
setButtons.coffeeshop.addEventListener('click',brain.selectCoffeeShop)
setButtons.bonfire.addEventListener('click',brain.selectBonfire)

// tema modo
setButtons.sun.addEventListener('click', brain.themeMode)
setButtons.moon.addEventListener('click', brain.themeMode)

