import mongoose from 'mongoose'
import studentSchema from './student.model'

studentSchema.statics = {
    create: function (data, result) {
        const student = new this(data);
        student.save(result)
    },

    get: function (filter, result) {
        this.find(filter, result);
    },

    getById: function (filter, result) {
        this.findOne(filter, result);
    },

    delete: function (filter, result) {
        this.findOneAndDelete(filter, result)
    },

    update: function (filter, updateData, result) {
        this.findOneAndUpdate(filter, {$set: updateData}, {new: true}, result);
    }
};

const studentModel = mongoose.model('Student', studentSchema);
module.exports = studentModel;
