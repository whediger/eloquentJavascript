


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

listToArray(arrayToList([1,2,3]));	
	
function listToArray(listIn){

	//the point of this exorcise makes no sense to me. Who cares if you can add a value
	//to a crazy potentially endless element inside of an element inside of an element
	//list. Its neat in a golden ratio gennerated spiral way. But, what's the point? 
	//As far as my understanding can lead me, I would rather use a regular list of objects.

}	

