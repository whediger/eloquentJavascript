
var array1 = [ "1", "2", "3" ];
var array2 = [ "4", "5", "6" ];
var array3 = [ "7", "8", "9" ];
var array4 = [ "10", "11", "12" ];


var array1 = [ array1, array2, array3, array4];

// ---- +=={=======> this is for learning
	
function flattened(arrayIn){ 
return	arrayIn.reduce(function(previousArray, currentArray) {
	
	console.log("previousArray: ");
	console.log(previousArray);
	console.log("currentArray: ");
	console.log(currentArray);

	previousArray = previousArray.concat(currentArray);
	return previousArray;
});	

  
}

console.log(flattened(array1));
