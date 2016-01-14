
var stuff1 = "wes";
var stuff2 = "wes";

deepEqual(stuff1,stuff2);


function deepEqual(value1,value2){
	
	if ( value1 === null || value2 === null ) {
		if (value1 === value2) {console.log("both values are null"); return true;} // <---remove console.log()
	} else if (typeof value1 === 'object' || typeof value2 === 'object' ){
		//------- compare objects with a recursive call to deepEqual()
		var obj1prop = [];
		var obj2prop = [];
		for (var key in value1) {
			obj1prop.push(key);
		}
		for (var key in value2) {
			obj2prop.push(key);
		}
		if ( obj1prop.length == obj2prop.length ){
			var count = 0;
			var valCount = 0;
			for ( i = 0; i < obj1prop.length; i++ ) {
				for ( ii = 0; ii < obj2prop.length; ii++ ) {	
					if ( obj1prop[i] == obj2prop[ii] ) { count += 1; }
				} //searches through for match in all of second objects properties	
			} //increments through all of first objects properties
		
			if ( count == obj1prop.length ){
				for ( i = 0; i < obj1prop.length; i++ ) {
					for ( ii = 0; ii < obj2prop.length; ii++ ) {	
						if ( value1[obj1prop[i]] == value2[obj2prop[ii]] ) { valCount += 1; }
					} //searches through for match in all of second objects values	
				} //increments through all of first objects values
				if ( valCount == obj1prop.length) { 
					console.log("returns: true"); 
					return true; 
				} else {
					console.log("returns: false");
					return false;
				}
			}
			
		} else { console.log("returns: false"); 
				return false;
				}
	} else {
		if ( value1 === value2 ) { 
			console.log("returns: true"); 
			return true;
		}
	}
	
}
// matching objects with more than one value
var stuff01 = { value01: "hello", value02: "whatsup"};
var stuff02 = { value01: "hello", value02: "whatsup"};

// objects with one matching and one not matching pair of values
var stuff05 = { value01: "alright", value02: "good"};
var stuff06 = { value01: "noway", value02: "good"};

// matching objects with more than one value that match but are not in the same order
var stuff08 = { value02: "whatsup", value01: "hello"};
var stuff09 = { value01: "hello", value02: "whatsup"};

// matching values but one object has an extra value
var stuff11 = { value01: "hello", value02: "whatsup"};
var stuff12 = { value01: "hello", value02: "whatsup", value03: "more stuff"};

console.log("matching comparison: ");
deepEqual(stuff01, stuff02);

console.log("unmatching comparison: ");
deepEqual(stuff05, stuff06);

console.log("matching but scrambled comparison: ");
deepEqual(stuff08, stuff09);

console.log("matching values but one has an extra value: ");
deepEqual(stuff11,stuff12);
