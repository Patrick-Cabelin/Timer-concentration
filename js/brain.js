export {Brain}

function Brain( { 
    minuteHand,
    secondHand,
    timerOut,

    }   
) {

    let Minutes = Number(minuteHand.textContent)
    let Seconds = Number(secondHand.textContent)
    function starterClock(){
        
        function counter() {
            let EndCicle = Minutes <= 0 && Seconds <= 0

            secondHand.textContent = '00'

            if( Seconds <= 0 ) {
                Seconds = 60
                --Minutes
            }
            
            if(EndCicle){
                finishClock()
                return 
            }

            clockDisplay(Minutes, String(Seconds - 1))
            console.log(clockDisplay(Minutes, String(Seconds - 1)))
            starterClock()
        }

        timerOut = setTimeout(counter, 1000)
        
    }
    
    function clockDisplay(Minutes, Seconds) {
        minuteHand.textContent = String(Minutes).padStart(2, '0')
        secondHand.textContent = String(Seconds).padStart(2, '0')
        console.log(Minutes, Seconds)
    }

    function finishClock() {
        minuteHand.textContent = '00'
        secondHand.textContent = '00'
        clearTimeout(timerOut)
    }
    
    // function controlTime(){
    //     let moreORless= event.path[1].classList.value == "less"
       
    //     if(moreORless){
    //         Minutes= Minutes-5
    //         clockDisplay(Minutes, Seconds)

    //     }
    //     Minutes = Minutes + 5
    //     clockDisplay(Minutes,Seconds)

    // }

    return {
        starterClock,
        finishClock,
        clockDisplay,
        // controlTime,
        
    }
}