'use strict';

var itemArray;
var emptySlots;

function generateGame(){
	var items = Items.getItems();
	var recipes = Items.getRecipes();

	for (var i = 0; i < items.length; i++) {
		var empty = createEmptySlot();
		itemsField.appendChild(empty);
		var input = createDragItem(items[i], i);
		empty.appendChild(input);
	}

	var index = randomInteger(0, recipes.length - 1);
	empty = document.createElement('div');
	empty.id  = "empty";
	recipeField.appendChild(empty);
	var recipeInput = document.createElement('input');
	recipeInput.type = "image";
	recipeInput.src = "images/" + recipes[index].recipe + ".png";
	recipeInput.id = "recipeItem";
	recipeInput.addEventListener('click', showRecipeItems);
	empty.appendChild(recipeInput);

	itemArray = recipes[index].item.slice();

	for (var i = 0; i < recipes[index].item.length; i++) {
		empty = createEmptySlot();
		dragField.appendChild(empty);
	}
	emptySlots = 0;
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

function showRecipeItems(event){
	
}

function createEmptySlot(){
	var empty = document.createElement('div');
	empty.id  = "empty";
	empty.ondrop = drop;
	empty.ondragover = allowDrop;

	return empty;
}

function createDragItem(item, i){
	var input = document.createElement('input');
	input.type = "image";
	input.src = "images/" + item + ".png";
	input.setAttribute('draggable', true);
	input.ondragstart = drag;
	input.value = item;
	input.id = item + i;

	return input;
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
