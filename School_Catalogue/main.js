class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    typeof newNumberOfStudents === "number"
      ? (this._numberOfStudents = newNumberOfStudents)
      : console.log("Invalid input: numberOfStudents must be set to a Number.");
  }

  quickFacts() {
    return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`;
  }
  // static function must be called by direct reference to the class. So School.pickSubstituteTeacher() only, otherwise error.
  static pickSubstituteTeacher(substituteTeachers) {
    const index = Math.round(Math.random() * (substituteTeachers.length - 1));
    return substituteTeachers[index];
  }
}

// Inheritance is used. The class PrimarySchool extends the School class which means the constructor and all the functions are passed down to the child class of PrimarySchool.
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    // super references the construct function in the parent class to set new name, level and numberOfStudents values.
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    // super references the construct function in the parent class to set new name, level and numberOfStudents values.
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
console.log(lorraineHansbury.quickFacts());
let avaliableSubTeachers = [
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
];
const subTeacher = School.pickSubstituteTeacher(avaliableSubTeachers);
console.log(subTeacher);

const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);
console.log(alSmith.sportsTeams);
