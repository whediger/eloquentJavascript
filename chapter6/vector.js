function Vector(x,y) {
	this.x = x;
	this.y = y;
	
	this.plus = function(x, y) {
		var vector2 = Math.sqrt(((x*x) + (y*y)));
		//console.log for test purposes
		console.log("plus executed. vector2: " + vector2.toFixed(2)); //to 2 decimal places for readablility
		vector2 = vector2 + this.length;
		//console.log for test purposes
		console.log("plus executed. vector sum: " + vector2.toFixed(2)); //to 2 decimal places for readablility
		return vector2;	
	};
	
	this.minus = function(x, y) {
		var vector2 = Math.sqrt(((x*x) + (y*y)));
		//console.log for test purposes
		console.log("minus executed. vector2: " + vector2.toFixed(2)); //to 2 decimal places for readablility
		vector2 = this.length - vector2;
		//console.log for test purposes
		console.log("minus executed. vector difference: " + vector2.toFixed(2)); //to 2 decimal places for readablility
		return vector2;	
	};
	
}

Object.defineProperty(Vector.prototype, "length", {
	get: function() { return Math.sqrt(((this.x*this.x) + (this.y*this.y)), -2); }
});

//   +=={=======>   test code follows
	
var vec = new Vector(23,3);
var vec2 = new Vector(11, 5);

console.log(vec.x + " " + vec.y);
console.log(vec2.x + " " + vec2.y);
vec.plus(12,3);
vec2.plus(12,3);
console.log(vec.length);
console.log(vec2.length);
vec.minus(12,3);
vec2.minus(12,3);

