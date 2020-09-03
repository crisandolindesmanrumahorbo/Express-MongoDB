import {url} from './properties'
import mongoose from 'mongoose';

module.exports = () => {

    //set uses to avoid deprecation
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);

    mongoose.connect(url);

    mongoose.connection.on('connected', () => {
        console.log("Mongoose default connection is open to ", url);
    });

    mongoose.connection.on('error', (err) => {
        console.log("Mongoose default connection has occured " + err + " error");
    });

    mongoose.connection.on('disconnected', () => {
        console.log("Mongoose default connection is disconnected");
    });

    process.on('SIGINT', function () {
        mongoose.connection.close(() => {
            console.log("Mongoose default connection is disconnected due to application termination");
            process.exit(0)
        });
    });
}
