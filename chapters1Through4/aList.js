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


function arrayToList(arrayIn) {
	
	count = arrayIn.length;
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

