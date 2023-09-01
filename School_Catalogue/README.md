# School Management System

This JavaScript code represents a school management system using classes and methods to create and manage schools, including primary schools and high schools.

## Code Components

1. **School Class:**

- This class represents a general school and includes properties for name, level (e.g., "primary" or "high"), and numberOfStudents.
- It provides getters and setters for these properties to ensure data validation.
- The quickFacts() method returns a brief summary of the school's details.
- The static method pickSubstituteTeacher(substituteTeachers) randomly selects a substitute teacher from a given array of substitute teachers.

2. **PrimarySchool Class:**

- This class extends the School class to represent a primary school.
- It includes an additional property for pickupPolicy.
- The constructor uses super to call the parent class constructor and set the appropriate level to "primary."

3. **HighSchool Class:**

- This class extends the School class to represent a high school.
- It includes an additional property for sportsTeams.
- The constructor uses super to call the parent class constructor and set the appropriate level to "high."

## Usage

You can use this code to create and manage schools, both primary and high schools. Here's how to use the main features:

- Create instances of schools using the appropriate class constructor (School, PrimarySchool, or HighSchool).
- Access and modify school properties using getters and setters.
  Use the quickFacts() method to get a quick summary of a school's details.
  Utilize the pickSubstituteTeacher(substituteTeachers) method to randomly select a substitute teacher from a list.

## Note

- This code serves as a simplified representation of a school management system for educational and portfolio purposes.
- It demonstrates the use of classes, constructors, inheritance, getters, setters, and static methods in JavaScript.
