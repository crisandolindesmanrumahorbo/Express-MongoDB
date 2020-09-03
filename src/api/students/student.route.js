import Student from './student.controller'

module.exports = (router) => {
    router.post('/students/', Student.createStudent);
    router.get('/students/', Student.getStudents);
    router.get('/students/:student_id', Student.getStudent);
    router.delete('/students/:student_id', Student.deleteStudent);
    router.put('/students/:student_id', Student.updateStudent);
}
