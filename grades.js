let grades = [73, 67, 38, 33];

function gradingStudents(grades) {
    // Write your code here
    let notasFinal = [];
    for (let i of grades) {
        if (i % 5 >= 3 && i > 37) {
            notasFinal.push(i + (5 - (i % 5)));
        } else if (i % 5 < 3) {
            notasFinal.push(i);
        } else if (i < 38) {
            notasFinal.push(i);
        }
    }
    return notasFinal;
}
console.log(gradingStudents(grades));
