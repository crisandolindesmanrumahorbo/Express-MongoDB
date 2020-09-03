'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _student = require('./student.model');

var _student2 = _interopRequireDefault(_student);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var studentModel = _mongoose2.default.model('Student', _student2.default);
_student2.default.statics = {
    create: function create(data, result) {
        var student = new studentModel(data);
        student.save(result);
    },

    get: function get(filter, result) {
        undefined.find(filter, result);
    },

    getById: function getById(filter, result) {
        undefined.findOne(filter, result);
    },

    deleteById: function deleteById(filter, result) {
        undefined.findOneAndDelete(filter, result);
    },

    updateById: function updateById(filter, updateData, result) {
        undefined.findOneAndUpdate(filter, { $set: updateData }, { new: true }, result);
    }
};

module.exports = studentModel;