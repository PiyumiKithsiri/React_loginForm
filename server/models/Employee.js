const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
    cpassword: String
});

const EmployeeModel = mongoose.model('employees', EmployeeSchema);
module.exports = EmployeeModel;