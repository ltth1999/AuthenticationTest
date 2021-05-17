"use strict";
var Student = /** @class */ (function () {
    function Student(name, ID, dayOfBirth, mathScore, englishScore) {
        this.name = name;
        this.ID = ID;
        this.dayOfBirth = dayOfBirth;
        this.mathScore = mathScore;
        this.englishScore = englishScore;
    }
    Student.prototype.displayInformation = function () {
        console.log("Name : " + this.name);
        console.log("ID : " + this.ID);
        console.log("Day Of Birth : " + this.dayOfBirth);
        console.log("Math Score : " + this.mathScore);
        console.log("English Score : " + this.englishScore);
    };
    return Student;
}());
var student1 = new Student("John", "12344555", "6/7/1999", 8, 9);
var student2 = new Student("Kohli", "12344666", "7/8/1999", 9, 8);
student1.displayInformation();
student2.displayInformation();
