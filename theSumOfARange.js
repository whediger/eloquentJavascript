
function range( start, end, step ){

	if ( !step ) { step = 1; }
	
	var rangeArray = [];
	
	if ( ( start < end ) && ( step > 0 ) ){	
		for ( i = start; i <= end; i += step ) {
			rangeArray.push(i);
		}
	} else if ( ( start > end ) && ( step < 0 ) ){
		for ( ii = start; ii >= end; ii += step ){
			rangeArray.push(ii);
		}
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

console.log("sum of range 5-2 step= -1: " + sum(range(5,2,-1)));
