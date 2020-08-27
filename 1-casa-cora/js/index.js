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

document.getElementById('devbutton').addEventListener('click', devTools);

function devTools() {
    navSize = document.getElementById('devnav').style.height;
    if (navSize == 50) {
      return open(); }
    return close();
}

function open() {
    document.getElementById('devnav').style.height = '50px';
    document.getElementById('nav').style.marginTop = '50px';
}

function close()  {
    document.getElementById('devnav').style.height = '0px';
    document.getElementById('nav').style.marginTop = '0px';
  }
