

function reverseArray(arrayIn){
	
	var arrayOut = [];
	
	for ( i = 0; i <= arrayIn.length; i++ ) {
		arrayOut[i] = arrayIn[(arrayIn.length - i)];
		console.log("arrayOut: " + arrayOut[i]);
		
	}
	return arrayOut;
}

var testArray = ["1", "2", "3", "4", "5"];
console.log("result of passing arroy, contents chars 1 though 5: " + reverseArray(testArray));
