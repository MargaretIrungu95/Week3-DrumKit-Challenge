// BOOM KEY
const boomBtn = document.getElementById("boomBtn");
const boomSound = document.getElementById("boomSound");

boomBtn.addEventListener('click', () => {
   boomSound.play();
});
document.addEventListener('keydown', function(e) {
   if (e.key == "a") {
      if (boomSound.paused){
         boomSound.play();
      } 
      else{
         boomSound.pause;
      }
   }
})

// CLAP KEY 
const clapBtn = document.getElementById("clapBtn");
const clapSound = document.getElementById("clapSound");

clapBtn.addEventListener('click', () => {
   clapSound.play();
});
document.addEventListener('keydown', function(e) {
   if (e.key == "s") {
      if (clapSound.paused){
         clapSound.play();
      } 
      else{
         clapSound.pause;
      }
   }
})

// HIHAT KEY
const hihatBtn = document.getElementById("hihatBtn");
const hihatSound = document.getElementById("hihatSound");

hihatBtn.addEventListener('click', () => {
   hihatSound.play();
});
document.addEventListener('keydown', function(e) {
   if (e.key == "d") {
      if (hihatSound.paused){
         hihatSound.play();
      } 
      else{
         hihatSound.pause;
      }
   }
})

// KICK KEY
const kickBtn = document.getElementById("kickBtn");
const kickSound = document.getElementById("kickSound");

kickBtn.addEventListener('click', () => {
   kickSound.play();
});
document.addEventListener('keydown', function(e) {
   if (e.key == "f") {
      if (kickSound.paused){
         kickSound.play();
      } 
      else{
         kickSound.pause;
      }
   }
})

// OPENHAT KEY
const openhatBtn = document.getElementById("openhatBtn");
const openhatSound = document.getElementById("openhatSound");

openhatBtn.addEventListener('click', () => {
   openhatSound.play();
});
document.addEventListener('keydown', function(e) {
   if (e.key == "g") {
      if (openhatSound.paused){
         openhatSound.play();
      } 
      else{
         openhatSound.pause;
      }
   }
})

// RIDE KEY
const rideBtn = document.getElementById("rideBtn");
const rideSound = document.getElementById("rideSound");

rideBtn.addEventListener('click', () => {
   rideSound.play();
});
document.addEventListener('keydown', function(e) {
   if (e.key == "h") {
      if (rideSound.paused){
         rideSound.play();
      } 
      else{
         rideSound.pause;
      }
   }
})

// SNARE KEY
const snareBtn = document.getElementById("snareBtn");
const snareSound = document.getElementById("snareSound");

snareBtn.addEventListener('click', () => {
   snareSound.play();
});
document.addEventListener('keydown', function(e) {
   if (e.key == "j") {
      if (snareSound.paused){
         snareSound.play();
      } 
      else{
         snareSound.pause;
      }
   }
})

// TINK KEY
const tinkBtn = document.getElementById("tinkBtn");
const tinkSound = document.getElementById("tinkSound");

tinkBtn.addEventListener('click', () => {
   tinkSound.play();
});
document.addEventListener('keydown', function(e) {
   if (e.key == "k") {
      if (tinkSound.paused){
         tinkSound.play();
      } 
      else{
         tinkSound.pause;
      }
   }
})
// TOM KEY
const tomBtn = document.getElementById("tomBtn");
const tomSound = document.getElementById("tomSound");

tomBtn.addEventListener('click', () => {
   tomSound.play();
});
document.addEventListener('keydown', function(e) {
   if (e.key == "l") {
      if (tomSound.paused){
         tomSound.play();
      } 
      else{
         tomSound.pause;
      }
   }
})
