'use strict';

var _student = require('./student.controller');

module.exports = function (router) {
    router.post('/students/create', _student.createStudent);
};