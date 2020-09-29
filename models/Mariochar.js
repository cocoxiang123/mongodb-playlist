const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create Schema and Model

const MarioCharSechema = new Schema({
    name: String,
    weight: Number
});

const MarioChar = mongoose.model('mariochar', MarioCharSechema)
