import express from 'express';
import Student from './src/api/students/student.model';
import bodyParser from 'body-parser'
import connectDatabase from './src/config/database'
import studentRoutes from './src/api/students/student.route'

const app = express();
const port = 3000;
const router = express.Router();

connectDatabase();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', router);

studentRoutes(router);
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
app.post('/students/send', (request, response) => {
    const cris  = {
        name: request.body.name
    }
    const student = new Student(cris);
    // student.name = request.body.name
    student.save((err) => {
        if (err)
            response.send(err);
        response.json({message: "Student created"});
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

app.listen(port, () => console.log(`Listening to port ${port}`));
