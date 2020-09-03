import express from 'express';
import bodyParser from 'body-parser'
import connectDatabase from './src/config/database'
import studentRoutes from './src/api/students/student.route'

const app = express();
const port = 3000;
const router = express.Router();

connectDatabase();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
});

app.use('/api', router);

studentRoutes(router);

app.listen(port, () => console.log(`Listening to port ${port}`));
