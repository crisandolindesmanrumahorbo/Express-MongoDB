import Student from './student.dao'

exports.createStudent = (request, response, next) =>{
    const student = {
        name: request.body.name
    };
    Student.create(student, (err) => {
        if (err)
            response.send(err);
        response.json({message: "Student created"});
    });
}

exports.getStudents = (request, response, next) => {
    Student.get({}, (err, students) => {
        if (err)
            response.send(err);
        response.json(students);
    });
}

exports.getStudent = (request, response, next) => {
    Student.get({_id: request.params.student_id}, (err, student) => {
        if (err)
            response.send(err);
        response.json(student);
    });
}

exports.deleteStudent = (request, response, next) => {
    Student.delete({_id: request.params.student_id}, (err) => {
        if (err)
            response.send(err);
        response.json("Student deleted");
    });
}

exports.updateStudent = (request, response,next) => {
    const student = {
        name: request.body.name
    }
    Student.update({_id: request.params.student_id}, student, err => {
        if (err)
            response.send(err)
        response.json("Student updated")
    });
}
