

// selected elements
// define variables >> get element by ID 
var navTrigger = document.getElementById('nav-trigger');
var nav = document.getElementById('nav');
var header = document.getElementById('header');
var heading = document.getElementById('heading');
var labels = document.getElementsByClassName('nav-label');

// sizing
//define variables
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var fontSize = windowHeight*0.1;
var headingSize = windowWidth*0.1;


//add event listener on navTrigger to listen for 'click' and notify 
//navToggle to run. ?  >> question: why do you need to add .addEventListener vs .click?

navTrigger.addEventListener('click', navToggle);
window.addEventListener('resize', resize);


//declare function resize
function resize() {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  fontSize = windowHeight*0.1;
  headingSize = windowWidth*0.1;

  if(headingSize > windowHeight*0.3) headingSize = windowHeight*0.3; 
  
  //loop through lables styling, transitions ??
  for(var i = 0; i < labels.length; i++) {
    labels[i].style.fontSize = fontSize+'px';
    labels[i].style.height = fontSize+'px';
    labels[i].style.marginTop = '-'+fontSize*0.6+'px';
  }

  header.style.height = windowHeight+'px';
  heading.style.fontSize = headingSize+'px';
  heading.style.height = headingSize+'px';
  heading.style.marginTop = '-'+headingSize*0.6+'px';
  
}
// declare function navToggle 
// question>> is 'e' saying there is an eventListener associated with funcion navToggle?
function navToggle(e) {
  
  // define variable closed  and add class 'close' when 
  var closed = (navTrigger.className.indexOf('close') > 0); 
  
  //set behavior for navTrigger if closed
  if(closed) {
    navTrigger.className = 'nav-trigger open';
    nav.className = 'out';
  } else {
    navTrigger.className = 'nav-trigger close';
    nav.className = 'in';
  }
}

window.onload = resize;