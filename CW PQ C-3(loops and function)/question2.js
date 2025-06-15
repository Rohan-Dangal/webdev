//wap in q1 using for in loop

let students = 
{
    ram:{html:0,css:0},
    hari:{html:0,css:0}
};
for (const student in students) {
    for(let subject in students[student])
    {
        let mark = parseFloat(prompt(`enter ${student} marks in ${subject}`));
        students[student][subject]= mark;
    }
}
console.log("marks of students:")
console.log(students);