
//Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console. 
var treeChar = document.getElementById("treeChar");
var treeHeight = document.getElementById("treeHeight");

function startTree() {
	var charInput = document.getElementById("treeChar").value;
	var heightInput = document.getElementById("treeHeight").value;
	if(charInput == "" || charInput.length == 0 || charInput == null) {
	alert("Please choose a character to build your tree");
	}
	else if(heightInput == "" || heightInput.length == 0 || heightInput == null) {
		alert("Please choose a number of rows for the height of your tree");
		}
	else {	
	var treeObject = { height: treeHeight.value*1,
					   character: treeChar.value
					 };
	growYourTree(treeObject);
	}
}

var growYourTree = function(treeBuilders) {
	var treeString = "";
	for (i = 0; i < treeBuilders.height; i++) {
	var treeChars = (2 * i) + 1;
	var treeSpace = treeBuilders.height - (i + 1);
	console.log(" ".repeat(treeSpace) + treeBuilders.character.repeat(treeChars));
	}
console.log(treeString);
}

 	
 //add an event listener to the grow tree button, as well as an event listener for the enter/return key.
var growButton = document.getElementById("growButton");
growButton.addEventListener("click", startTree);
document.getElementById("treeInfo").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("growButton").click();
    }
});




