function fuckCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have fucked me <br/>" + localStorage.clickcount + "<br/> time(s) so far.";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

var audio = document.getElementById("music");
audio.volume = 0.2;

// let devbutton = document.querySelector('#devbutton');
// let devnav = document.querySelector('#devnav');
// let nav = document.querySelector('#nav');
//
// devbutton.addEventListener('click', ()=>{
//   console.log('its working');
//   if (devnav.style.height === 0) {
//     devnav.style.height = '50px';
//     nav.style.marginTop = '50px';
//     console.log('50px');
//   }
//   if (nav.style.marginTop === '50px') {
//     devnav.style.height = '0';
//     nav.style.marginTop = '0';
//     console.log('0');
//   }
// });
