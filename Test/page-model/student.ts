class Student {
    name: string;
    ID: string;
    dayOfBirth: string;
    mathScore: number;
    englishScore: number;

    constructor(name: string, ID: string, dayOfBirth: string, mathScore: number, englishScore: number) {
        this.name = name;
        this.ID = ID;
        this.dayOfBirth = dayOfBirth;
        this.mathScore = mathScore;
        this.englishScore = englishScore;
    }

    displayInformation(): void {
        console.log("Name : " + this.name);
        console.log("ID : " + this.ID);
        console.log("Day Of Birth : " + this.dayOfBirth);
        console.log("Math Score : " + this.mathScore);
        console.log("English Score : " + this.englishScore);
    }
}
var student1 = new Student("John", "12344555", "6/7/1999", 8, 9);
var student2 = new Student("Smith", "12344666", "7/8/1999", 9, 8);

student1.displayInformation();
student2.displayInformation();