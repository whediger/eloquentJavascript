

function chessBoard(size) {

	var row = " ";
	
	//build initial row
	for ( i = 0; i < size; i++) { spaceShifter(); };
	
	//for shifting spaces in rows
	function spaceShifter() {
		if (row.charAt(0) === " " ){
			row = "#" + row;
		} else {
			row = " " + row;
		}
		
		row = row.substring(0,size);
	};
	
	//create rows and send them to terminal output
	for ( i = 0 ; i < size; i++) {
		
		spaceShifter();
		
		console.log(row);
	}
};

//call chessBoard function for testing purposes
chessBoard(4);
