const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.render();
  }

  // Remove this
  // static testCommand() {
  //   console.log("TEST COMMAND");
  // }

  static checkWin(grid) {
    let gridStr = grid.join();
    let count = 0;

    let xResult = ['X,X,X, , , , , , ', 
                   ' , , ,X,X,X, , , ', 
                   ' , , , , , ,X,X,X',
                   'X, , ,X, , ,X, , ',
                   ' ,X, , ,X, , ,X, ',
                   ' , ,X, , ,X, , ,X',
                   'X, , , ,X, , , ,X',
                   ' , ,X, ,X, ,X, , ']

    let oResult = ['O,O,O, , , , , , ',
                   ' , , ,O,O,O, , , ',
                   ' , , , , , ,O,O,O',
                   'O, , ,O, , ,O, , ',
                   ' ,O, , ,O, , ,O, ',
                   ' , ,O, , ,O, , ,O',
                   'O, , , ,O, , , ,O',
                   ' , ,O, ,O, ,O, , ']

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === ' ') {count++;}
      }
    }

    if (xResult.includes(gridStr)) {return 'X'}
    if (oResult.includes(gridStr)) {return 'O'}
    if (count === 9) {return false;}
    if (count === 0) {return 'T'}

    return false;
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
  }
  
  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
