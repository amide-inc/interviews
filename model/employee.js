const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    user : {type:  mongoose.Types.ObjectId,  required: true},
    organization : {type: String, required: true}
})

module.exports = mongoose.model('Employee', employeeSchema);