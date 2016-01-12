
var stuff1 = "wes";
var stuff2 = "wes";

deepEqual(stuff1,stuff2);


function deepEqual(value1,value2){
	
	if ( value1 === null || value2 === null ) {
		if (value1 === value2) {console.log("both values are null"); return true;} // <---remove console.log()
	} else if (typeof value1 === 'object' || typeof value2 === 'object' ){
		//------- compare objects with a recursive call to deepEqual()
	} else {
		if ( value1 === value2 ) { 
			console.log("the values have equal values: " 
						+ value1 + ":" + value2); return true;} // <---remove console.log()
	}
	
}
