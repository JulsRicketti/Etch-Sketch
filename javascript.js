//this was just a test method
/*$(document).ready(function(){
  $('button').fadeOut('fast');
});*/
var dimensions;

$(document).ready(function(){
	dimensions=10;
	createTable(dimensions);
});

function newButton(){
	alert("new button has been clicked");
}
function clearButton(){
	$('#etch_sketch_table').remove();
	createTable(dimensions);
}

function createTable(dimensions){
	var content = "<div id='etch_sketch_table'><table align='center'>"
	
	for(var i=0; i<dimensions; i++){
		content+='<tr>';
		for (var j=0; j<dimensions; j++){
	    content += '<td class ="etch-sketch-item"></td>';			
		}

	    content+='</tr>';
	}
	content += "</table>  </div>"
	$('#table-place-holder').append(content);
}

