function openNavOne() {
  document.getElementById('sidenavOne').style.width = '200px';
  document.getElementsByName('main').style.marginLeft = "200px";
}

function closeNavOne() {
  document.getElementById('sidenavOne').style.width = '0px';
  document.getElementsByName('main').style.marginLeft = "0px";
}
function openNavTwo() {
  document.getElementById('sidenavTwo').style.width = '300px';
  document.getElementsByName('main').style.marginRight = "300px";
}

function closeNavTwo() {
  document.getElementById('sidenavTwo').style.width = '0px';
  document.getElementsByTagName('main').style.marginRight = "0px";
}
