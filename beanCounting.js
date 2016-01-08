

function countBs(stringIn){
	
	var count = 0;
	
	for ( i = 0; i <= stringIn.length; i++ ){
		if ( stringIn.charAt(i) == "B" ){ count += 1; };	
	}
	
	return count;
}
