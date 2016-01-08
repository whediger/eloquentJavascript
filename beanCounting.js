

function countBs(stringIn){
	
	return countChar(stringIn, "B");
};

function countChar(stringIn, charIn){
	
	console.log("charIn: " + charIn);
	
	var count = 0;
	
	for ( i = 0; i <= stringIn.length; i++ ){
		if ( stringIn.charAt(i) == charIn ){ count += 1; };	
	}
	
	return count;
	
};

console.log("count B's of BbBbBbB(4): " + countBs("BbBbBbB"));
