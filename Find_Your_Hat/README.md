# Find Your Hat - A JavaScript Console Game

"Find Your Hat" is a simple console-based game implemented in JavaScript that demonstrates the principles of Object-Oriented Programming (OOP). In this game, you'll navigate a field filled with obstacles to find your hat.

## How to Play

**Installation:**

1. Make sure you have Node.js installed on your computer.
2. Download the game files.
3. Open your terminal or command prompt and navigate to the game's directory.

**Running the Game:**

Run the game using the following command: node main.js

## Game Objective:

Your goal is to find your hat (^) on the field while avoiding falling into holes (O).

## Game Controls:

Use the following keys to navigate:

- "w" for UP
- "s" for DOWN
- "a" for LEFT
- "d" for RIGHT
- "q" to QUIT the game

## Game Rules:

- You start at the top-left corner of the field (position marked by "\*").
- Move your character (\*) around the grid using the keys mentioned above.
- The field is surrounded by boundaries, and you cannot move beyond them. Attempting to do so will end the game.
- You will win the game when you reach your hat (^).
- You will lose the game if you fall into a hole (O).

## Game State:

The game will continuously update and display the current state of the field.
You will receive feedback on your movements (up, down, left, right) and game outcomes (win or lose).

## Winning and Losing:

If you find your hat (^), you win the game!
If you fall into a hole (O), you lose the game.
In either case, the game will terminate, and you can restart by running it again.

## Object-Oriented Programming (OOP) Principles

This game demonstrates the following OOP principles:

- Classes: The game uses a class called Field to encapsulate the game logic and data, promoting code organization and reusability.

- Encapsulation: The \_playField, \_hatIndex, \_holeIndexes, \_playerIndexX, and \_playerIndexY properties are encapsulated within the Field class, ensuring that they are accessible only within the class.

- Methods: The class defines methods for gameplay, including move, win, lose, checkBounds, and findIndexes. These methods encapsulate specific functionalities of the game.

- Constructor: The constructor method initializes the game state when an instance of the Field class is created.

- Modularity: The code is modular and organized, with distinct methods for different tasks, making it easier to read, understand, and maintain.
