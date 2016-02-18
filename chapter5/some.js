
function some(arrayIn, functionIn) {
	var result = false;
	for ( i = 0; i < arrayIn.length; i++){
		if (functionIn(arrayIn[i]) == true) {
			return result = true;
		}
	console.log(result);	
	}
	console.log("---");
	return result;
};

// --- +=={=======> Following is for testing purposes

var testArrayEveryFalse = [ 9, 7, 9, 6, 0 ];

var testArrayEveryTrue = [ 2, 24, 44, 12, 6 ];

var testResultTrue = some(testArrayEveryTrue, function(valueIn){
	//this function checks to see if entire data set is made of even numbers
	//using array with all even values
	valueIn = valueIn % 2;
	var result = true;
	if (valueIn == 0) { result = true; }
	else { result = false; }
	return result;
});

var testResultFalse = some(testArrayEveryFalse, function(valueIn){
	//this function checks to see if entire data set is made of even numbers
	//using array not all values are even
	valueIn = valueIn % 2;
	var result = true;
	if (valueIn == 0) { result = true; }
	else { result = false; }
	return result;
});

console.log("true:");
console.log(testResultTrue);
console.log("false:");
console.log(testResultFalse);


