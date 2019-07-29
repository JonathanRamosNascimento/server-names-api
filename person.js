const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    city: String,
    country: String
});

module.export = mongoose.model("Person", personSchema);