// Store student marks
const marks = [60, 84, 50, 65, 94];

// Convert all marks to numbers using map()
const formattedMarks = marks.map(mark => Number(mark));

// Calculate total using reduce()
const total = formattedMarks.reduce((sum, mark) => sum + mark, 0);

// Calculate average
const average = total / formattedMarks.length;

// Determine pass or fail
const result = average >= 50 ? "PASS " : "FAIL ";

// Display Output
const output = `
    Total Marks: ${total}
    Average Marks: ${average.toFixed(2)}
    Result: ${result}
`;
console.log(output);