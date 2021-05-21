//ASSIGNMENT 4 WEB COMPONENTS
//MODULE FILE
//IN THIS FILE YOU WILL CREATE YOUR CUSTOM MODULE FOR YOUR REQUIRED FUNCTIONALITY AND EXPOSE IT THROUGH A 'PUBLICLY' ACCESSIBLE METHOD.

//https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
class clockBox extends HTMLElement {
    constructor() {
        super();
		
        var template = document.getElementById("tmplt__clock");
		
		//Content of template: https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement/content
		//cloneNode : https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode
        let documentFragment = template.content.cloneNode(true);
		
		var shadow = this.attachShadow({mode: 'open'});
		
		shadow.appendChild(documentFragment);
    }	
}


//"j" is the input paramater number.
//takes the number as an input, if it is a single digit number, then it concatenates a zero at the head of the number.
const twoDigit = function (j) {
	if (j<10) {
		j = "0" + j;
	}
	return j;
}
	

var currentTime = {
	
	displayTime : function () {
		//gets today's date.
		var today = new Date();
		
		//gathers information about current hour, min and sec. 
		var currentHour = twoDigit(today.getHours()) + ":";;
		var currentMin = twoDigit(today.getMinutes()) + ":";;
		var currentSec = twoDigit(today.getSeconds());
		
		//concatenates the information together.
		fullTime = currentHour + currentMin + currentSec;
		
		return fullTime;
	
	}
	
}

/*
//The following IIFE did not work.
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
var currentTime = (function () {
	
	//"j" is the input paramater number.
	//takes the number as an input, if it is a single digit number, then it concatenates a zero at the head of the number.
	const twoDigit = function (j) {
		if (j<10) {
			j = "0" + j;
		}
		return j;
    }
	
	var fullTime;
	
	var getCurrentTime = function () {
		//gets today's date.
		var today = new Date();
		
		//gathers information about current hour, min and sec. 
		var currentHour = twoDigit(today.getHours()) + ":";;
		var currentMin = twoDigit(today.getMinutes()) + ":";;
		var currentSec = twoDigit(today.getSeconds());
		
		fullTime = currentHour + currentMin + currentSec;
		console.log(fullTime);
		
		return fullTime;
	
	}
	
	
    var module = {
		displayTime : getCurrentTime()
	};	
	
	return module;

})();
*/

