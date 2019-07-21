const mongoose = require('mongoose'); 

const employeeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true 
    },
    department: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        unique: true
    }, 
    delete: {
        type: Number, 
        default: 0
    }, 
    created: {
        type: Date,
        default: Date.now
    }
});
 


module.exports =  mongoose.model("Employee", employeeSchema);