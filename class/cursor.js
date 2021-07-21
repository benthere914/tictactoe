const Screen = require("./screen");
const TTT = require("./ttt");

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

  static up() {
    if (this.row > 0) {this.row--;}
    // this.resetBackgroundColor();
    // Screen.setBackgroundColor(this.row, this.col, "white");
    // Move cursor up
  }

  static down() {
    if (this.row < 2) {this.row++}
    // this.row--;
    // Move cursor down
  }

  static left() {
    if (this.col > 0) this.col--;
    // Move cursor left
  }

  static right() {
    if(this.col < 2) this.col++;
    // Move cursor right
  }

  static enter(){
    TTT.toggle()
  }

}



module.exports = Cursor;
