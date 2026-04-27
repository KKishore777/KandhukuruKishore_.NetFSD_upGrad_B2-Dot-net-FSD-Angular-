import { PASS_MARKS } from "./constants";
import { Student } from "./student.model";
import { getGrade, getTopper } from "./student.service";
import { calculateAverage, formatName } from "./utils";

const students: Student[] = [
    { id: 1, name: "john", marks: 85 },
    { id: 2, name: "david", marks: 92 },
    { id: 3, name: "alex", marks: 76 }
];

for (let student of students) {
    console.log(formatName(student.name));
    console.log(getGrade(student.marks));
}

console.log(calculateAverage(students));

console.log(getTopper(students));

console.log(PASS_MARKS);