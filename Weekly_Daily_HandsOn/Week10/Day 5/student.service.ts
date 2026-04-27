import { Student } from "./student.model";

export function getGrade(marks: number): string {
    if (marks >= 90) return "A";
    if (marks >= 75) return "B";
    if (marks >= 40) return "C";
    return "Fail";
}

export function getTopper(students: Student[]): Student {
    let topper = students[0];

    for (let student of students) {
        if (student.marks > topper.marks) {
            topper = student;
        }
    }

    return topper;
}