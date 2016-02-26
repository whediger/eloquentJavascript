function Vector(x,y) {
	this.x = x;
	this.y = y;
	
	this.plus = function(x, y) {
		vector2 = Math.sqrt(((x*x) + (y*y)));
		vector2 = Math.round(vector2);
		console.log("plus executed. vector2: " + vector2);
	};
	
}


var vec = new Vector(23,3);
var vec2 = new Vector(11, 5);

console.log(vec.x + " " + vec.y);
console.log(vec2.x + " " + vec2.y);
vec.plus(2,3);

