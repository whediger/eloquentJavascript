

function reverseArray(arrayIn){
	
	var arrayOut = [];
	
	for ( i = 0; i < arrayIn.length; i++ ) {
		arrayOut[i] = arrayIn[(arrayIn.length - i - 1)];
	}
	
	return arrayOut;
}

var testArray = ["1", "2", "3", "4", "5"];
console.log("result of passing arroy, contents chars 1 though 5 to reverseArray: " + reverseArray(testArray));

//---  +=={========>

function reverseArrayInPlace(arrayIn) {
	
	var holdVal = " ";//do I need to declare this?
	var loopLength = (arrayIn.length - (arrayIn.length % 2))/2;
	
	for ( i = 0; i <= loopLength; i++ ) {
		holdVal = arrayIn[i];
		arrayIn[i] = arrayIn[arrayIn.length - i - 1];
		arrayIn[arrayIn.length - i - 1] = holdVal;
	}
	return arrayIn;
}

console.log("result of passing arroy, contents chars 1 though 5 to reverseArrayInPlace: " 
			+ reverseArrayInPlace(testArray));
			
