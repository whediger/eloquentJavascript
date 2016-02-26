function Vector(x,y) {
	this.x = x;
	this.y = y;
	
	this.plus = function(x, y) {
		x = x + this.x;
		y = y + this.y;
		//console.log for test purposes
		console.log("plus executed. new x: " + x + " new y: " + y);
		var vec = new Vector(x,y);
		return vec;
	};
	
	this.minus = function(x, y) {
		x = this.x - x;
		y = this.y - y;
		//console.log for test purposes
		console.log("minus executed. new x: " + x + " new y: " + y);
		var vec = new Vector(x,y);
		return vec;
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
console.log(vec2.plus(12,3));
console.log(vec2.minus(12,3));


