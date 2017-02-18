
//pull info for tree height and character from input boxes to build the tree later

var treeChar = document.getElementById("treeChar");
var treeHeight = document.getElementById("treeHeight");

//check if both input boxes are complete and alert the user if they are not

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

//grow the tree using the user's input from the webpage

var growYourTree = function(treeBuilders) {
	var treeString = "";
	for (i = 0; i < treeBuilders.height; i++) {
	var treeChars = (2 * i) + 1;
	var treeSpace = treeBuilders.height - (i + 1);
	console.log(" ".repeat(treeSpace) + treeBuilders.character.repeat(treeChars));
	}
}

 	
//add an event listener to the grow tree button to start to grow the tree

var growButton = document.getElementById("growButton");
growButton.addEventListener("click", startTree);

//add an event listener to check if enter is pressed in either input field

document.getElementById("treeInfo").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("growButton").click();
    }
});




