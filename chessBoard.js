

function chessBoard(size) {

	var row = " ";
	
	
	
	for ( i = 0; i <= (size+1) ; i++) {		
			
			//shift adding a space or # in row
			if (row.charAt(0) === " " ){
				row = "#" + row;
			} else {
				row = " " + row;
			}
			
			//removes extra chars at end of string
			if (row.length > size ) { row = row.substring(0, size); };
			//console.logs new lines
			if (row.length === size) { console.log(row); };
	};					

	
};

//call chessBoard function for testing purposes
chessBoard(4);
