class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = Array(25).fill(null);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }

        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }

    estimate(grade) {
        if (typeof grade === 'number' && grade >= 0 && grade <= 100) {
            this.grades.push(grade);
            console.log(`${this.firstName} ${this.lastName} received a grade: ${grade}`);
        } else {
            console.log('Invalid grade. Please provide a number between 0 and 100.');
        }
    }

    present() {
        this.updateAttendance(true);
        console.log(`${this.firstName} ${this.lastName} is present.`);
    }

    absent() {
        this.updateAttendance(false);
        console.log(`${this.firstName} ${this.lastName} is absent.`);
    }

    updateAttendance(isPresent) {
        const lastIndex = this.attendance.length - 1;

        if (this.attendance[lastIndex] === null) {
            this.attendance[lastIndex] = isPresent;
        } else {
            console.log('Attendance record is full. Cannot update.');
        }
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const attendanceRatio = this.calculateAttendanceRatio();

        if (averageGrade > 90 && attendanceRatio > 0.9) {
            return 'Well done!';
        } else if (averageGrade > 70 || attendanceRatio > 0.7) {
            return 'Good, but could be better';
        } else {
            return 'Not satisfactory!';
        }
    }

    calculateAttendanceRatio() {
        const presentCount = this.attendance.filter((isPresent) => isPresent === true).length;
        const totalClasses = this.attendance.length;

        return presentCount / totalClasses;
    }
}

const student1 = new Student('John', 'Doe', 2000);
const student2 = new Student('Jane', 'Smith', 1999);
const student3 = new Student('Mary', 'Johnson', 2001);

student1.estimate(85);
student1.present();
student1.absent();
student1.estimate(95);

console.log(student1.summary());

student2.estimate(75);
student2.present();
student2.present();
student2.absent();

console.log(student2.summary());

student3.estimate(92);
student3.present();
student3.present();
student3.present();
student3.absent();

console.log(student3.summary());
