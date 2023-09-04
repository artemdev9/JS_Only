const prompt = require("prompt-sync")({ sigint: true }); // requires node module prompt-sync, sigint: true - optional allows for Signal Interrupt event -  Ctrl+C.

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(playField) {
    this._playField = playField;
    this._hatIndex = this.findIndexes(playField, hat);
    this._holeIndexes = this.findIndexes(playField, hole);
    this._playerIndexX = 0;
    this._playerIndexY = 0;
  }

  print() {
    console.log(
      this._playField.map((innerArray) => innerArray.join("")).join("\n")
    );
  }

  // ask user for input until game is won or lost
  // move the character
  move(wasd) {
    switch (wasd) {
      case "w":
        this._playerIndexY--;
        console.log("up");
        break;

      case "s":
        this._playerIndexY++;
        console.log("down");
        break;

      case "a":
        this._playerIndexX--;
        console.log("left");
        break;

      case "d":
        this._playerIndexX++;
        console.log("right");
        break;

      default:
        console.log("Error");
    }
    this.checkBounds();
    this._playField[this._playerIndexY][this._playerIndexX] = pathCharacter;
  }

  // check if the player found the hat
  win() {
    const playerIndex = [this._playerIndexY, this._playerIndexX];
    for (const hatPos of this._hatIndex) {
      if (hatPos[0] === playerIndex[0] && hatPos[1] === playerIndex[1]) {
        console.log("You found the hat.");
        process.exit(); // terminates the program, only works in node.js
      }
    }
  }

  // check if the player fell in the hole
  lose() {
    const playerIndex = [this._playerIndexY, this._playerIndexX];
    for (const holePos of this._holeIndexes) {
      if (holePos[0] === playerIndex[0] && holePos[1] === playerIndex[1]) {
        console.log("You fell into the hole.");
        process.exit(); // terminates the program, only works in node.js
      }
    }
  }

  checkBounds() {
    const numRows = this._playField.length; // Number of rows
    const numCols = this._playField.length > 0 ? this._playField[0].length : 0; // number of columns

    if (this._playerIndexY < 0 || this._playerIndexY >= numRows) {
      console.log("You went outside of the boundary.");
      process.exit();
    } else if (this._playerIndexX < 0 || this._playerIndexX >= numCols) {
      console.log("You went outside of the boundary.");
      process.exit();
    }
  }

  findIndexes(matrix, target) {
    const indexes = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === target) {
          indexes.push([i, j]);
          // Return the row and column indices of the target element
        }
      }
    }
    return indexes;
  }
}

const myField = new Field([
  ["*", "░", "O", "░", "O", "░"],
  ["░", "O", "░", "░", "░", "░"],
  ["░", "░", "░", "O", "O", "O"],
  ["░", "O", "O", "O", "^", "░"],
  ["░", "░", "░", "O", "░", "O"],
  ["░", "░", "O", "░", "░", "O"],
  ["░", "░", "░", "░", "░", "░"],
  ["░", "░", "░", "O", "O", "░"],
  ["░", "O", "O", "O", "░", "░"],
  ["░", "O", "O", "O", "O", "░"],
]);

while (true) {
  myField.win();
  myField.lose();
  myField.checkBounds();
  myField.print();
  const userInput = prompt("Which way? (wasd): ");
  if (userInput === "q") {
    break;
  }
  myField.move(userInput);
  console.clear();
}
