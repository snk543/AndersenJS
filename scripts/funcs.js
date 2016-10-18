'use strict';

var itemsField = document.getElementById("itemsField");
var recipeField = document.getElementById("recipeField");
var dragField = document.getElementById("dragField");

function winMsg(){
	alert('GREAT!');
}

function loseMsg(){
	alert('LOSE :(');
}

function randomInteger(min, max) { 
    var rand = min - 0.5 + Math.random() * (max - min + 1) 
    rand = Math.round(rand); 

    return rand; 
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (ev.target.id == 'empty'){
        ev.target.appendChild(document.getElementById(data));
    }

    emptySlots = 0;

    for (i = 0; i < dragField.childNodes.length; i++){
    	if (dragField.childNodes[i].childNodes.length != 0) {
    		emptySlots++;
    	}
    }
    if (emptySlots == dragField.childNodes.length) {
    	for (var i = 0; i < dragField.childNodes.length ; i++){
    		var pos = itemArray.indexOf(dragField.childNodes[i].firstChild.value);
    		if (pos >= 0) {
    			itemArray.splice(pos, 1);
    		}
    	}
    	if (itemArray.length == 0) {
    		setTimeout(function(){winMsg()}, 200);
    		setTimeout(function(){clearFields()}, 250);
    		setTimeout(function(){generateGame()}, 300);
    	}
    	else setTimeout(function(){loseMsg()}, 200);
    } 
}