

function chessBoard(size) {

	var row = " ";
	console.log("row length: " + row.length);
	
	//fill initial row with spaces and # or shift charecters
	for ( i = 0; row.length < size; i++) { spaceShifter(); };
	
	//shift adding a space or # in row
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
