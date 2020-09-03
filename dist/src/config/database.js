'use strict';

var _properties = require('./properties');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {

    //set uses to avoid deprecation
    _mongoose2.default.set('useNewUrlParser', true);
    _mongoose2.default.set('useFindAndModify', false);
    _mongoose2.default.set('useCreateIndex', true);
    _mongoose2.default.set('useUnifiedTopology', true);

    _mongoose2.default.connect(_properties.url);

    _mongoose2.default.connection.on('connected', function () {
        console.log("Mongoose default connection is open to ", _properties.url);
    });

    _mongoose2.default.connection.on('error', function (err) {
        console.log("Mongoose default connection has occured " + err + " error");
    });

    _mongoose2.default.connection.on('disconnected', function () {
        console.log("Mongoose default connection is disconnected");
    });

    process.on('SIGINT', function () {
        _mongoose2.default.connection.close(function () {
            console.log("Mongoose default connection is disconnected due to application termination");
            process.exit(0);
        });
    });
};