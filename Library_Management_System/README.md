# Library Management System

This JavaScript project demonstrates the use of classes and methods to create a simple media library. It allows you to manage both books and movies within the library, including checking them in/out, adding ratings, and calculating average ratings.

## Code Components

1. **Media Class:**
   The Media class serves as the base class for both books and movies. It includes the following properties and methods:

- constructor(title): Initializes a media item with a title.
- title: Getter method to retrieve the title.
- isCheckedOut: Getter and setter methods for checking in/out the media.
- toggleCheckOutStatus(): Toggles the checked-out status.
- getAverageRating(): Calculates and returns the average rating of the media.
- addRating(newRating): Adds a new rating to the media.

2. **Book Class:**
   The Book class extends the Media class to represent books. It includes the following properties:

- constructor(title, author, pages): Initializes a book with title, author, and pages.
- author: Getter method to retrieve the author.
- pages: Getter method to retrieve the number of pages.

3. **Movie Class:**
   The Movie class extends the Media class to represent movies. It includes the following properties:

- constructor(title, director, runTime): Initializes a movie with title, director, and run time.
- director: Getter method to retrieve the director.
- runTime: Getter method to retrieve the run time.

## Usage

You can use this code to create and manage a media library that includes both books and movies. Here's how to use the main features:

- Create instances of books and movies using the Book and Movie class constructors, respectively.
- Access and modify media properties using getters and setters.
- Use the toggleCheckOutStatus() method to check in/out a media item.
- Add ratings to media items using the addRating(newRating) method.
- Calculate the average rating of a media item using the getAverageRating() method.

## Note

- This code serves as a simplified representation of a library management system for educational and portfolio purposes.
- This project demonstrates the use of classes, constructors, inheritance, getters, setters, and instance methods in JavaScript for managing media items in a library.
