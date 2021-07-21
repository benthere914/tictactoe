const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up() {
    if (this.row > 0) {this.row--;}
    // Move cursor up
  }

  down() {
    this.row--;
    // Move cursor down
  }

  left() {
    this.col--;
    // Move cursor left
  }

  right() {
    this.col++;
    // Move cursor right
  }

}


module.exports = Cursor;
