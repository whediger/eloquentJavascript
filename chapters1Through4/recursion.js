

var result;

function isEven(number){
	
	if (number < 0 ) {
		number *=	-1;
	} else if ( number == 0 ){
		result = true;
	} else if ( number == 1 ){
		result = false;
	} else {
		number -= 2;
		isEven(number);
	};
	return result;
};

console.log("is even(50): " + isEven(50));
console.log("is even(75): " + isEven(75));
console.log("is even(-777)" + isEven(-777));
