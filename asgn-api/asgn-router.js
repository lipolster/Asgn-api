
let router = require("express").Router();
let controller = require('./asgn-controller');


router.route('/assignments')
    .get(controller.index)
    .post(controller.new);

router.route('/assignments/:assignment_id')
    .get(controller.view)
    .patch(controller.update)
    .put(controller.update)
    .delete(controller.delete);


router.get('/', function(requ, res) {
    res.json({
        status: "API is working",
        message: 'Wecome to assignments api'
    });
});

module.exports = router;

