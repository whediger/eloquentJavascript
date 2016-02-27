///Most of the following was created by following allong in the Book. Pg 108-116

function rowHeights(rows) {
	return rows.map(function(row) {
		return rows.reduce(function(max, cell) {
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
