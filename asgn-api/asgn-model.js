var mongoose = require('mongoose');

var assignmentSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    assignmentName:{
        type: String,
        required: true
    },
    dueDate: {
        type: Date
    }
})

var Assignment = module.exports = mongoose.model('assignment', assignmentSchema);

module.exports.get = function (callback, limit){
    Assignment.find(callback).limit(limit);
}