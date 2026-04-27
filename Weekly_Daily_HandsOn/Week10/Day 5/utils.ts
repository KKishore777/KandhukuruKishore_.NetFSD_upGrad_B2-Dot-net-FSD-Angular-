import { Student } from "./student.model";

export function formatName(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

export function calculateAverage(students: Student[]): number {
    let total = 0;

    for (let student of students) {
        total += student.marks;
    }

    return total / students.length;
}