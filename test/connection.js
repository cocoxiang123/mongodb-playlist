const mongoose = require('mongoose')

//Connect to mangodb
mongoose.connect("mongodb://localhost/testaroo");

mongoose.connection.once('open', function () {
    console.log('Connect has been made, now make fireworks...')
}).on('error', function () {
    console.log('connection error');
})