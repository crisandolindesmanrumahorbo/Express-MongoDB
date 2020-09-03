import Student from './student.dao'

export function createStudent(request, response) {
    const student = {
        name: request.body.name
    };
    Student.create(student, (err) =>{
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
    Student.getById({name: request.params.name}, (err, student) => {
        if (err)
            response.send(err);
        response.json(student);
    });
}

export function removeStudent(request, response) {
    Student.deleteById({_id: request.params.id}, (err) => {
        if (err)
            response.send(err);
        response.json("Student deleted");
    });
}

export function updateStudent(request, response) {
    const student = {
        name: request.body.name
    }
    Student.updateById({_id: request.params.id}, student, err => {
        if (err)
            response.send(err)
        response.json("Student updated")
    });
}
