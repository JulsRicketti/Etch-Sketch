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

function createTable(dimensions){
	var content = "<table align='center'>"
	
	for(var i=0; i<dimensions; i++){
		content+='<tr>';
		for (var j=0; j<dimensions; j++){
	    content += '<td class ="etch-sketch-table"></td>';			
		}

	    content+='</tr>';
	}
	content += "</table>"
	$('#etch_sketch_table').append(content);
}

