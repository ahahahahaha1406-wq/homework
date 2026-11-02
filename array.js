let students = [
    { name: "Aibegim", grade: 10 },
    { name: "Mariam", grade: 20 },
    { name: "Aidana", grade: 30 },
    { name: "Aliya", grade: 40 },
    {name: "Syimyk", grade: 50 },
];

let students55 = students.map(student => {
    return {
        name: student.name,
        grade: student.grade + 5
    };
});

console.log("before:");
console.log(students);

console.log("after:");
console.log(students55);




