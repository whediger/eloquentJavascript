

function chessBoard(size) {

	var row = " ";
	
	
	function spaceShifter() {
		
		//shift adding a space or # in row
			if (row.charAt(0) === " " ){
				row = "#" + row;
			} else {
				row = " " + row;
			}
			
			row = row.substring(0, size);
	};			
	
	
	//fill initial row with spaces and # or shift charecters
	for ( i = 0; i < size ; i++) {
	
		spaceShifter();	
		
	};
		
	//shift rows and send them to terminal output
	for ( i = 0 ; i < size; i++) {
		
		spaceShifter();
		
		console.log(row);
	}
	
};

//call chessBoard function for testing purposes
chessBoard(4);
