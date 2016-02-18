
function some(arrayIn, functionIn) {
	var result = false;
	for ( i = 0; i < arrayIn.length; i++){
		if (functionIn(arrayIn[i]) == true) {
			return result = true;
		}
	}
	return result;
};