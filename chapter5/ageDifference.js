
//link ancestery.js data set file -- JSON file
var ancestry = require('./ancestry.js');
ancestry = JSON.parse(ancestry);

//searches for and returns values
function filter(array, test) {
	
	var passed = [];
	
	for (var i = 0; i < array.length; i++ ){
		if (test(array[i]))
			passed.push(array[i]);
	}
	return passed;
}

//takes array parameter containing ancestry data of mothers and children
//returns average age difference
function averageMotherChildAgeDiff(array) {
	
	var ageDifferences = [];
	var averageAge = 0;
	var ageTotal = 0;
	
	//create array of age differences
	filter(ancestry, function(person) {
		
		var motherName = person.mother;
		var childBorn = person.born;
		
		filter(ancestry, function(person) {
			if (person.name == motherName ){
				ageDifferences.push(childBorn - person.born);
			} 
		});
		
		return ageDifferences;
	});
	
	for (i = 0; i < ageDifferences.length; i++ ) {
		ageTotal += ageDifferences[i];
	}
	
	averageAge = Math.round( ageTotal / ageDifferences.length );
	
	return averageAge;
}

console.log(averageMotherChildAgeDiff(ancestry));