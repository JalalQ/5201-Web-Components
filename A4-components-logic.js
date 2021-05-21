//ASSIGNMENT 4 WEB COMPONENTS
//LOGIC FILE
//IN THIS FILE YOU WILL SIMPLY GRAB YOUR CUSTOM ELEMENT AND ATTACH YOUR METHOD FROM YOUR MODULE TO IT.

window.onload = runClock;

var clockDisplay = document.getElementById("clockDisplay");

function display() {
    "use strict";
    
	clockDisplay.innerHTML = currentTime.displayTime();
	setTimeout(display, 1000);
	
}


function runClock() {  
	"use strict";
	
	customElements.define('humber-clock', clockBox);
	
	//setInterval(display, 500);	
	display();
}