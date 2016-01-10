

function reverseArray(arrayIn){
	
	var arrayOut = [];
	
	for ( i = 0; i <= arrayIn.length; i++ ) {
		arrayOut[i] = arrayIn[(arrayIn.length - i)];
	}
	return arrayOut;
}

var testArray = ["1", "2", "3", "4", "5"];
console.log("result of passing arroy, contents chars 1 though 5 to reverseArray: " + reverseArray(testArray));
//----------------------------------

function reverseArrayInPlace(arrayIn) {
	var holdVal;
	var loopLength = (arrayIn.length - (arrayIn.length % 2))/2;
	console.log("loopLength: " + loopLength + " -arrayIn: " + arrayIn + " -arrayIn.length: " + arrayIn.length);//does not need to change mean value
	for ( i = 0; i <= loopLength; i++ ) {
		holdVal = arrayIn[i];
		arrayIn[i] = arrayIn[arrayIn.length - i - 1];
		arrayIn[arrayIn.length - i - 1] = holdVal;
		console.log(arrayIn);
		console.log("holdVal: " + holdVal + " arrayIn.length: " + arrayIn.length);
	}
	return arrayIn;
}
console.log("result of passing arroy, contents chars 1 though 5 to reverseArrayInPlace: " 
			+ reverseArrayInPlace(testArray));