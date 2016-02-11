//link ancestery.js data set file -- JSON file
var ancestry = require('./ancestry.js');
ancestry = JSON.parse(ancestry);

createAveAge(ancestry);

function createAveAge(dataIn){
		
	//these two arrays will have syncronous index values of the
	//age they died and the century they were born in
	var centuries = [];
	var ages = [];
	
	//these two arrays will have syncronous index values of
	//the summary of the centuries people where born 
	//and the average age they were when they were born
	var centuryTags = [];
	var averageAges = [];
	
	//numOfPeople keeps a tally of the number of people born 
	//during a certain century
	var numOfPeople = [];
	
	
	function filter(array, test) {
		
		var passed = [];
		
		for (var i = 0; i < array.length; i++ ){
			if (test(array[i]))
				passed.push(array[i]);
		}
		return passed;
	}
	
	//creates three arrays; centuries and ages are synchronous: centuryTags creates list of centuries
	filter(ancestry, function(person){
		centuries.push(Math.ceil(person.died / 100));
		centuryTags.push(Math.ceil(person.died / 100));
		ages.push(person.died - person.born);
	});
	
	//sort centuryTags and reduce the array to have single instances 
	//for one to many relationship to centuries array
	centuryTags = centuryTags.sort(function(a, b){ return a - b; });
	
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
	centuryTags = centuryReducer(centuryTags);
	
	//this is where the work is done. 
	//The syncronous centuries and ages arrays are used
	//to create the averageAges array.
	for ( i = 0; i < centuryTags.length; i++ ){
		for ( ii = 0; ii < centuries.length; ii++ ){
			if ( centuryTags[i] == centuries[ii]) {
				
			}
		}
	}
	
	console.log(centuries);
	console.log(centuries.length);
	//console.log(ages);
	console.log(centuryTags);

	
}

