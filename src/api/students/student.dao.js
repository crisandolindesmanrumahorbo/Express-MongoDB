import mongoose from 'mongoose'
import studentSchema from './student.model'

const studentModel = mongoose.model('Student', studentSchema);
studentSchema.statics = {
    create : (data, result) => {
        const student = new studentModel(data);
        student.save(result)
    },

    get: (filter, result) => {
        this.find(filter, result);
    },

    getById: (filter, result) => {
        this.findOne(filter, result);
    },

    deleteById: (filter, result) => {
        this.findOneAndDelete(filter, result)
    },

    updateById: (filter, updateData, result) => {
        this.findOneAndUpdate(filter, {$set: updateData}, {new: true}, result);
    }
};

module.exports = studentModel;
