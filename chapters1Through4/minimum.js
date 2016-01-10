function min( x, y ) {
	
	if ( x === y ) {
		return x;
	} else if ( x < y ) {
		return x;
	} else if ( x > y ) {
		return y;
	}
}


console.log("5 and 7: " + min (5,7) );
console.log("yes and 9: " + min("yes", 9));
console.log("5 and no: " + min (5, "no"));
console.log("7 and 3: " + min(7,3));
console.log("7 and 7: " + min(7,7));

