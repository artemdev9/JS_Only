const prompt = require("prompt-sync")({ sigint: true }); // requires node module prompt-sync, sigint: true - optional allows for Signal Interrupt event -  Ctrl+C.

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(playField) {
    this._playField = playField;
    this._hatIndex = this.findIndex(playField, hat);
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

    this._playField[this._playerIndexY][this._playerIndexX] = "*";
  }

  // check if the user got the hat
  win() {
    const playerIndex = `${this._playerIndexY},${this._playerIndexX}`;
    console.log(String(this._hatIndex));
    console.log(String(playerIndex));

    if (String(this._hatIndex) === String(playerIndex)) {
      console.log("You won");
    }
  }

  lose() {}

  findIndex(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === target) {
          return [i, j]; // Return the row and column indices of the target element
        }
      }
    }
  }
}

const myField = new Field([
  ["*", "░", "O", "░", "O", "░"],
  ["░", "O", "░", "░", "░", "░"],
  ["░", "░", "░", "O", "O", "O"],
  ["░", "O", "O", "O", "^", "░"],
  ["░", "░", "░", "O", "░", "O"],
  ["░", "░", "░", "░", "░", "░"],
]);

while (true) {
  myField.win();
  myField.print();
  const userInput = prompt("Which way? (wasd): ");

  if (userInput === "q") {
    break;
  }

  myField.move(userInput);
  console.clear();
}
