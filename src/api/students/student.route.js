import {
    createStudent,
    getStudent,
    getStudents,
    removeStudent,
    updateStudent} from './student.controller'

module.exports = (router) => {
    router.post('/students/create', createStudent);
}
