function createBoard() {
    myBoard = [];
    //board creation
    for (var x = 0; x < 25; x++) {
      myBoard[x] = [];
  
      for (var y = 0; y < 25; y++) {
        myBoard[x][y] = blank;
      }
    }
  }
  
  function displayBoard() {
    get('output_holder').innerHTML = '';
    var outputString = '';
  
    for (var y = 0; y < myBoard.length; y++) {
      for (var x = 0; x < myBoard[y].length; x++) {
        outputString = outputString + myBoard[x][y];
      }
      outputString = outputString + "</br>";
    }
    get('output_holder').innerHTML = outputString;
  }