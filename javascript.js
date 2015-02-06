//this was just a test method
/*$(document).ready(function(){
  $('button').fadeOut('fast');
});*/

function newButton(){
	alert("new button has been clicked");
}
function clearButton(){
	alert("clear button has been clicked");
}

var dimentions = prompt("What size would you like the board to be?",'5');
if(dimentions==null){
	dimentions=5; //default value for now is 5
}
alert("You have chosen: "+dimentions);
