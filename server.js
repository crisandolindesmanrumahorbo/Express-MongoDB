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

app.listen(port, () => console.log(`Listening to port ${port}`));
