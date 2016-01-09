
function range( start, end ){

	var rangeArray = [];
		
	for ( i = start; i <= end; i++ ) {
		rangeArray.push(i);
	}
	return rangeArray;
}

function sum(numbers) {
	
	var total = 0;
	
	for ( i = 0; i < numbers.length; i++ ) {
		total += numbers[i];
	}
	return total;
}
console.log("sum of range 1-10: " + sum(range(1,10)));
