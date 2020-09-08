// let main = document.querySelector('main');
// let leftNav = document.querySelector('.left-nav');
// let rightNav = document.querySelector('.right-nav');
// let buttonOne = document.querySelector('#button1');
// let buttonTwo = document.querySelector('#button2');
//
// buttonOne.addEventListener('click', ()=>{
//   main.classList.toggle('visible-left-nav-in-main');
//   leftNav.classList.toggle('visible-left-nav');
// });
//
// buttonTwo.addEventListener('click', ()=>{
//   main.classList.toggle('visible-right-nav-in-main');
//   rightNav.classList.toggle('visible-right-nav');
// });

function leftNav(option) {
  let leftNavWidth = document.getElementsByClassName('left-nav').style.width;
  let mainLeftMargin = document.getElementsByName('main').style.marginLeft;
  if (option === 1) {
    leftNavWidth = '0px';
    mainLeftMargin = '0px';
  }
  if (option === 2) {
    leftNavWidth = '175px';
    mainLeftMargin = '175px';
  }
  else {
    alert('Nothing will happen like that.');
  }
}

function rightNav(option) {
  let rightNavWidth = document.getElementsByClassName('right-nav').style.width;
  let mainRightMargin = document.getElementsByName('main').style.marginRight;
  if (option === 1) {
    rightNavWidth = '0px';
    mainRightMargin = '0px';
  }
  if (option === 2) {
    rightNavWidth = '300px';
    mainRightMargin = '300px';
  }
  else {
    alert('Nothing will happen like that.');
  }
}


function openNavOne() {
  document.getElementsByClassName('left-nav').style.width = '175px';
  document.getElementsByName('main').style.marginLeft = "175px";
}
function closeNavOne() {
  document.getElementsByClassName('left-nav').style.width = '0px';
  document.getElementsByName('main').style.marginLeft = "0px";
}
function openNavTwo() {
  document.getElementsByClassName('right-nav').style.width = '300px';
  document.getElementsByName('main').style.marginRight = "300px";
}

function closeNavTwo() {
  document.getElementsByClassName('right-nav').style.width = '0px';
  document.getElementsByTagName('main').style.marginRight = "0px";
}
