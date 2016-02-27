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
