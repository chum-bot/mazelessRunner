function createBoard() {
  let gameBoard = make("table");
  gameBoard.id = "gameboard";
  gameBoard.style.display = "none";
  append(gameBoard, get("output_holder"));
  for (i = 0; i < 25; i++) {
    var row = gameBoard.insertRow(i);
    row.classList.add("rows");
    row.id = `row${i}`;
    for (j = 0; j < 25; j++) {
      var cell = row.insertCell(j);
      cell.classList.add("cells");
      cell.id = `cell${j}_${i}`;
    }
  }
}