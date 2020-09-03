import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: {type: String, default: ''},
    place: {type: String},
    planet: {type: String, default: 'Earth'}
});

module.exports = studentSchema;
