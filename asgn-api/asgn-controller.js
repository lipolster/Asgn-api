
var Assignment = require('./asgn-model');


exports.index = function(req, res) {
    Assignment.get(function (err, assignments) {
        if(err) {
            res.json(err);
        }
        res.json({
            status: "success",
            message: "assignments have been retrieved successfully",
            data: assignments
        })
    })
}


exports.new = function (req, res) {
    var assignment = new Assignment();
    assignment.courseName = req.body.courseName;
    assignment.assignmentName = req.body.assignmentName;
    assignment.dueDate = req.body.dueDate;

    assignment.save(function(err) {
        if(err) {
            res.json(err);
        }
        res.json({
            message: "a new assignment has been created.",
            data: assignment
        })
    })
}

exports.view = function(req, res) {
    Assignment.findById(req.params.assignment_id, function(err, assignment){
        if(err) {
            res.json(err);
        }
        res.json({
            message: "your assignment has been found",
            data: assignment
        })
    })
}

exports.update = function (req, res) {
    Assignment.findById(req.params.assignment_id, function(err, assignment){
        if(err){
            res.json(err);
        }
        assignment.courseName = req.body.courseName;
        assignment.assignmentName = req.body.assignmentName;
        assignment.dueDate = req.body.dueDate;

        
        assignment.save(function(err){
            if(err) {
                res.json(err);
            }
            res.json({
                message: 'your assignment information has been updated',
                data: assignment
            })
        })
    })
}


exports.delete = function(req, res){
    Assignment.remove({
        _id: req.params.assignment_id
    }, function(err, assignments){
        if(err){
            res.json(err);
        }
        res.json({
            status: "success",
            message: "your assignment has been deleted"
        })
    })
}