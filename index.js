function fuckCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
    localStorage.clickcount = Number(local.storage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1
    }
    document.getElementById ('result').innerHTML = "You have fucked the button "
     + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
