//link ancestery.js data set file -- JSON file
var ancestry = require('./ancestry.js');
ancestry = JSON.parse(ancestry);

var centuries = [];
var centuryTags = [];
var ages = [];



function filter(array, test) {
	
	var passed = [];
	
	for (var i = 0; i < array.length; i++ ){
		if (test(array[i]))
			passed.push(array[i]);
	}
	return passed;
}

filter(ancestry, function(person){
	centuries.push(Math.ceil(person.died / 100));
	ages.push(person.died - person.born);
});
//create a function existTest(array)  that returns if value is stored in array elements
/***
for ( i = 0; i < centuries.length; i++ ) {
	for ( ii = 0; ii <= centuryTags.length; ii++ ) {
		if (centuryTags[ii] == centuries[i]) {
			return;
		} else if ( ii == centuryTags.length ) {
			centuryTags.push(centuries[i]);
			console.log(centuries[i]);
		}
	}
}
****/
centuries = centuries.sort(function(a, b){ return a - b; });

function centuryReducer(arrayIn) {
	var next = 0;
	for ( i = 0; i < arrayIn.length; i++ ) {
		next = i + 1;
		if (arrayIn[i] == arrayIn[next]){
			arrayIn.splice( i, 1);
			i = i - 1;
		}
	}
	return arrayIn;
}
centuries = centuryReducer(centuries);

console.log(centuries);
console.log(centuries.length);
//console.log(ages);
//console.log(centuryTags);
