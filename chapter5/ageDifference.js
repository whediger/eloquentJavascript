

//this uses the ancestery.js data set file -- JSON file
var ancestry = require('./ancestry.js');
ancestry = JSON.parse(ancestry);

//console.log(ancestry.length);

function filter(array, test) {
	
	var passed = [];
	for (var i = 0; i < array.length; i++ ){
		if (test(array[i]))
			passed.push(array[i]);
	}
	return passed;
}

filter(ancestry, function(person) {
	var personBornMother = "Born: " + person.born + " Mother: " + person.mother;
	console.log(personBornMother);
	return personBornMother;
});


