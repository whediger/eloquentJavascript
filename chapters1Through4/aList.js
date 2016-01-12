


var list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		}
	}
};

console.log("from book:");
console.log(list);

// above from book to compare results +=={=======>

function arrayToList(arrayIn) {
	
	count = arrayIn.length;//use .pop and length to loop rather than for
	var newList;
	
	for ( i = (arrayIn.length - 1); i >= 0; i-- ) {
		
		if ( i == (arrayIn.length - 1) ){
			newList = { value: arrayIn[i], rest: null };
		} else {
			newList = { value: arrayIn[i], rest: newList };
		}
	}
		
	return newList;
}

console.log("new:");
console.log(arrayToList([1,2,3]));

//-- listToArray  +=={=======>

console.log("list to array: " + listToArray(arrayToList([1,2,3])));	
	
function listToArray(listIn){

	var arrayOut = [];
	
	//looked in the back of the book for the solution
	for (var node = listIn; node; node = node.rest) {
		arrayOut.push(node.value);
	}
	
	return arrayOut;
}	

//-- Helper functions  +=={========>
	
function prepend(listIn, elementIn)	{
	
	var newlist;
	
	newList = { value: elementIn, rest: listIn };
	
	return newList;
	
}
	 
//console.log("Append list with 4: ");
//console.log(prepend(list,4));

function nth(listIn, numIn) {
	
	for ( i = 0; i < numIn; i++) {
		if (listIn.rest == null ) { return "undefined";}
		listIn = listIn.rest;		
	}
	
	return listIn.value;
}
console.log(nth(list,1));
