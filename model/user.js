const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname : {type: String,  required: true},
    lastname : {type: String},
    email : {type: String,  required: true},
    password : {type: String,  required: true},
    employeeId: {type:String, required: true, unique: true},
    organization: {type:String, required: true}
})

module.exports = mongoose.model('User', userSchema);