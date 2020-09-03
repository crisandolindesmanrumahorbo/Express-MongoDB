"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createStudent = createStudent;
exports.getStudents = getStudents;
exports.getStudent = getStudent;
exports.removeStudent = removeStudent;
exports.updateStudent = updateStudent;

var _student = require("./student.dao");

var _student2 = _interopRequireDefault(_student);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStudent(request, response) {
    var student = {
        name: request.body.name
    };
    _student2.default.create(student, function (err) {
        if (err) response.send(err);
        response.json({ message: "Student created" });
    });
}

function getStudents(request, response) {
    _student2.default.get({}, function (err, students) {
        if (err) response.send(err);
        response.json(students);
    });
}

function getStudent(request, response) {
    _student2.default.getById({ name: request.params.name }, function (err, student) {
        if (err) response.send(err);
        response.json(student);
    });
}

function removeStudent(request, response) {
    _student2.default.deleteById({ _id: request.params.id }, function (err) {
        if (err) response.send(err);
        response.json("Student deleted");
    });
}

function updateStudent(request, response) {
    var student = {
        name: request.body.name
    };
    _student2.default.updateById({ _id: request.params.id }, student, function (err) {
        if (err) response.send(err);
        response.json("Student updated");
    });
}