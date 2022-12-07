
export function ambientSound() {


   const florest = new Audio("js/ambientSound/Floresta.wav") 
   const coffeeShop= new Audio("js/ambientSound/Cafeteria.wav")      
   const rain= new Audio("js/ambientSound/Chuva.wav")
   const bonfire= new Audio("js/ambientSound/Lareira.wav")   

   const song = {
      florest,
      coffeeShop,
      rain,
      bonfire,
   }

   function soundOff(soundOne,soundTwo, soundThree){
      soundOne.pause()
      soundTwo.pause()
      soundThree.pause()
   
      return 
   }

   function florestSong(){
      soundOff(song.bonfire,song.coffeeShop,song.rain)
      song.florest.play()
      song.florest.loop = true
      song.florest.volume = vmFlorest.value/100
   }

   function rainSong(){
      soundOff(song.florest, song.coffeeShop, song.bonfire )
      song.rain.play()
      song.rain.loop = true
      song.rain.volume = vmRain.value/100
   }

   function coffeeShopSong(){
      soundOff(song.rain, song.florest , song.bonfire )
      song.coffeeShop.play()
      song.coffeeShop.loop = true
      song.coffeeShop.volume = vmCoffeeShop.value/100
   }


   function bonfireSong(){
      soundOff( song.rain, song.coffeeShop, song.florest)
      song.bonfire.play()
      song.bonfire.loop = true
      song.bonfire.volume = vmBonfire.value/100
   }

   function Volume(){
      const vm = document.querySelectorAll('input[type ="range"]')
     
      switch (event.target) {
         case vmFlorest:
            song.florest.volume = vmFlorest.value/100
         break;

         case vmRain:
            song.rain.volume = vmRain.value/100
         break;
      
         case vmCoffeeShop:
            song.coffeeShop.volume = vmCoffeeShop.value/100
         break;

         case vmBonfire:
            song.bonfire.volume = vmBonfire.value/100
         break;
         
         default:
            return
         break;
      }
      
  
   }

   return {
      florestSong,
      coffeeShopSong,
      rainSong,
      bonfireSong,
      Volume
   }
}