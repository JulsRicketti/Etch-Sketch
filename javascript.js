//this was just a test method
/*$(document).ready(function(){
  $('button').fadeOut('fast');
});*/
var dimensions;

$(document).ready(function(){
	dimensions=30;
	$(".new-form").hide();
	createTable(dimensions);


});

function newButton(){
	$(".new-form").show();
}
function clearButton(){
	$(".new-form").hide();
	$('#etch_sketch_table').remove();
	createTable(dimensions);
}

function createTable(dimensionsInput){
	dimensions = dimensionsInput;
	var content = "<div id='etch_sketch_table'><table align='center'>"
	
	for(var i=0; i<dimensions; i++){
		content+='<tr>';
		for (var j=0; j<dimensions; j++){
	    content += '<td  class ="etch-sketch-item"></td>';			
		}

	    content+='</tr>';
	}
	content += "</table>  </div>"
	$('#table-place-holder').append(content);
	
	changeColor();
}

function changeColor(){
		$( "td" ).mouseover(function() {
		var $this = $(this);
      	$this.css('background-color', "green");
	});
}

function newSubmit(dimensions){
	$(".new-form").hide();
	$('#etch_sketch_table').remove();
	createTable(dimensions);
}

//etch-sketch hover

