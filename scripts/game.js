'use strict';

var items = Items.getItems();
var recipes = Items.getRecipes();
var index;
var itemArray;
var slots = 0;

function generateGame(){
	for (var i = 0; i < items.length; i++) {
		var empty = document.createElement('div');
		empty.id = "empty";
		empty.ondrop = drop;
		empty.ondragover = drop;
		itemsField.appendChild(empty);
		var item = document.createElement('input');
		item.type = "image";
		item.src = "images/" + items[i] + ".png";
		item.setAttribute('draggable', true);
		item.ondragstart = drag;
		item.value = items[i];
		item.id = items[i] + i;
		empty.appendChild(item);
	}

	index = randomInteger(0, recipes.length - 1);
	var empty = document.createElement('div');
	empty.id = "empty";
	recipeField.appendChild(empty);
	var recipeInput = document.createElement('input');
	recipeInput.type = "image";
	recipeInput.src = "images/" + recipes[index].recipe + ".png";
	recipeInput.id = "recipeItem";
	empty.appendChild(recipeInput);

	itemArray = recipes[index].item.slice();

	for (var i = 0; i < recipes[index].item.length; i++) {
		var empty = document.createElement('div');
		empty.ondrop = drop;
		empty.ondragover = drop;
		empty.id = "empty";
		dragField.appendChild(empty);
	}
	slots = 0;

}

function clearFields(){
	var children = dragField.childNodes;

	while(children.length){
		dragField.removeChild(children[0]);
	}

	children = itemsField.childNodes;
	while(children.length){
		itemsField.removeChild(children[0]);
	}

	children = recipeField.childNodes;
	while(children.length){
		recipeField.removeChild(children[0]);
	}
}

/*function removeChildnode(node){
	var children = node.childNodes;

	while(node.length){
		node.removeChild(children[0]);
	}
}

function clearFields(){
	removeChildnode(dragField);
	removeChildnode(itemsField);
	removeChildnode(recipeField);
}*/
