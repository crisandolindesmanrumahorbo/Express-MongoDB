'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var studentSchema = new _mongoose2.default.Schema({
    name: { type: String, default: '' },
    place: { type: String },
    planet: { type: String, default: 'Earth' }
});

// module.exports = mongoose.model('Student', studentSchema);
module.exports = studentSchema;