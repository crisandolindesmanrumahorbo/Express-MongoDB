'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _student = require('./src/api/students/student.model');

var _student2 = _interopRequireDefault(_student);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _database = require('./src/config/database');

var _database2 = _interopRequireDefault(_database);

var _student3 = require('./src/api/students/student.route');

var _student4 = _interopRequireDefault(_student3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;
var router = _express2.default.Router();

(0, _database2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

app.use('/api', router);

(0, _student4.default)(router);
//
// app.get('/', (request, response) => {
//     response.send('Welcome Boys');
// });
//
// app.get('/api/students', (request, response) => {
//     Student.find((err, students) => {
//         if (err)
//             response.send(err);
//         response.json(students);
//     });
// });
//
// app.get('/api/students/:student_id', (request, response) => {
//     Student.findOne({_id: request.params.student_id},
//         (err, student) => {
//             if (err)
//                 response.send(err);
//             response.json(student);
//         });
// });
//
app.post('/students/send', function (request, response) {
    var cris = {
        name: request.body.name
    };
    var student = new _student2.default(cris);
    // student.name = request.body.name
    student.save(function (err) {
        if (err) response.send(err);
        response.json({ message: "Student created" });
    });
});
//
// app.delete('/api/students/:student_id', (request, response) => {
//     Student.remove({_id: request.params.student_id}, (err) => {
//         if (err)
//             response.send(err);
//         response.json({message: 'Student deleted'});
//     });
// });
//
// app.put('/api/students/update/:student_id', (request, response) => {
//     const student = {
//         name: request.body.name
//     };
//     Student.update({_id: request.params.student_id}, student, (err) => {
//         if (err)
//             response.send(err);
//         response.json({message: "Student updated"});
//     });
// });

app.listen(port, function () {
    return console.log('Listening to port ' + port);
});