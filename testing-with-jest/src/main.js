function findHighScoringStudent(students) {
    let student = students[0];

    for (let i = 0; i < students.length; i++) {
        if (students[i].score > student.score) {
            student = students[i]
        }
    }
    return student
}

module.exports = findHighScoringStudent;