///Most of the following was created by following allong in the Book. Pg 108-116

// +=={=======>
//mountains data

var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

if (typeof module != "undefined" && module.exports)
  module.exports = MOUNTAINS;

// +=={=======>
//the rest

function rowHeights(rows) {
	return rows.map(function(row) {
		return row.reduce(function(max, cell) {
			return Math.max(max, cell.minHeight());
		}, 0);
	});
}

function colWidths(rows) {
	return rows[0].map(function(_, i) {
		return rows.reduce(function(max, row) {
			return Math.max(max, row[i].minWidth());
		}, 0);
	});
}

function drawTable(rows) {
	var heights = rowHeights(rows);
	var widths = colWidths(rows);

	function drawLine(blocks, lineNo) {
		return blocks.map(function(block){
			return block[lineNo];
		}).join(" ");
	}
	
	function drawRow(row, rowNum) {
		var blocks = row.map(function(cell, colNum) {
			return cell.draw(widths[colNum], heights[rowNum]);
		});

		return blocks[0].map(function(_, lineNo) {
			return drawLine(blocks, lineNo);
		}).join("\n");
	}
	
	return rows.map(drawRow).join("\n"); 
}

function repeat(string, times) {
	var result = "";
	for ( var i = 0; i < times; i++)
		result += string;
	return result;	
}

function TextCell(text) {
	this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line){
		return Math.max(width, line.length);
	}, 0);
};

TextCell.prototype.minHeight = function() {
	return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
	var result = [];
	for (var i = 0; i < height; i++) {
		var line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
};

// +=={=======>
//underline top row of column labels

function UnderlinedCell(inner) {
	this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function() {
	return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
	return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height -1)
		.concat([repeat("-", width)]);
};

// +=={=======>
// grid of cells from data set builder

function dataTable(data) {
	var keys = Object.keys(data[0]);
	var headers = keys.map(function(name) {
		return new UnderlinedCell(new TextCell(name));
	});
	var body = data.map(function(row) {
		return keys.map(function(name) {
			return new TextCell(String(row[name]));
		});
	});
	return [headers].concat(body);
}

console.log(drawTable(dataTable(MOUNTAINS)));

// +=={=======>
//RTextCell aligns number ext tot the right by adding spaces on the left equal to cell size

function RTextCell(text) {
	TextCell.call(this, text);
} 
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
	var result = [];
	for( var i = 0; i < height; i++ ) {
		var line = this.text[i] || "";
		result.push(repeat(" ", width - line.length) + line);
	}
	return result;
};


/***********************
// +=={=======>
// checkerboard test code
	
var rows = [];
for (var i = 0; i < 5; i++) {
	var row = [];
	for (var j = 0; j < 5; j++) {
		if ((j + i) % 2 == 0)
			row.push(new TextCell('##'));
		else
			row.push(new TextCell("  "));
	}
	//console.log(row); //row has strings, rows has objects
	rows.push(row);
}
//console.log(rows);
console.log(drawTable(rows));
*************************/