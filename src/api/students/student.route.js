import {createStudent, deleteStudent, getStudent, getStudents, updateStudent} from "./student.controller";

module.exports = (router) => {
    router.post('/students/', createStudent);
    router.get('/students/', getStudents);
    router.get('/students/:student_id', getStudent);
    router.delete('/students/:student_id', deleteStudent);
    router.put('/students/:student_id', updateStudent);
}
