
function every(arrayIn, functionIn) {
	var result = true;
	for ( i = 0; i < arrayIn.length; i++){
		if (functionIn(arrayIn[i]) == false) {
			return result = false;
		}
	}
	return result;
};


var testArrayEveryFalse = [ 4, 6, 8, 9, 0 ];

var testArrayEveryTrue = [ 2, 24, 44, 12, 6 ];

var testResultTrue = every(testArrayEveryTrue, function(valueIn){
	//this function checks to see if entire data set is made of even numbers
	valueIn = valueIn % 2;
	var result = true;
	if (valueIn == 0) { result = true; }
	else { result = false; }
	return result;
});

var testResultFalse = every(testArrayEveryFalse, function(valueIn){
	//this function checks to see if entire data set is made of even numbers
	valueIn = valueIn % 2;
	var result = true;
	if (valueIn == 0) { result = true; }
	else { result = false; }
	return result;
});


console.log(testResultTrue);
console.log(testResultFalse);


