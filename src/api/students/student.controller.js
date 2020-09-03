import Student from './student.dao'

export function createStudent(request, response) {
    const student = {
        name: request.body.name
    };
    Student.create(student, (err) => {
        if (err)
            response.send(err);
        response.json({message: "Student created"});
    });
}

export function getStudents(request, response) {
    Student.get({}, (err, students) => {
        if (err)
            response.send(err);
        response.json(students);
    });
}

export function getStudent(request, response) {
    Student.get({_id: request.params.student_id}, (err, student) => {
        if (err)
            response.send(err);
        response.json(student);
    });
}

export function deleteStudent(request, response) {
    Student.delete({_id: request.params.student_id}, (err) => {
        if (err)
            response.send(err);
        response.json("Student deleted");
    });
}

export function updateStudent(request, response) {
    const student = {
        name: request.body.name
    }
    Student.update({_id: request.params.student_id}, student, err => {
        if (err)
            response.send(err)
        response.json("Student updated")
    });
}
