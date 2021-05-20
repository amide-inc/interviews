const router = require('express').Router()
const User = require('../model/user');
const checkAuth = require('../middleware/check-auth')
router.get('/key/:key/value/:value/sort/:sort/page/:page/limit/:limt', checkAuth, (req, res) => {
    const key = req.params.key;
    const value = req.params.value;
    const sort = req.params.sort
    const page = parseInt(req.params.page)
    const limit = parseInt(req.params.page)

    switch (key) {
        case "firstname":
            User.find({ firstname: value })
                .sort(sort)
                .skip(page * limit)
                .limit(limit)
                .exec()
                .then((result) => {
                    return res.json({success: true, result :result});
                });
        case "lastname":
            User.find({ lastname: value })
                .sort(sort)
                .skip(page * limit)
                .limit(limit)
                .exec()
                .then((result) => {
                    return res.json({success: true, result :result});
                });
        case "email":
            User.find({ email: value })
                .sort(sort)
                .skip(page * limit)
                .limit(limit)
                .exec()
                .then((result) => {
                    return res.json({success: true, result :result});
                });
        case "employeeId":
            User.find({ employeeId: value })
                .sort(sort)
                .skip(page * limit)
                .limit(limit)
                .exec()
                .then((result) => {
                    return res.json({success: true, result :result});
                });
        case "organization":
            User.find({ organization: value })
                .sort(sort)
                .skip(page * limit)
                .limit(limit)
                .exec()
                .then((result) => {
                    return res.json({success: true, result :result});
                });
        default:
            User.find({ })
                .sort(sort)
                .skip(page * limit)
                .limit(limit)
                .exec()
                .then((result) => {
                    return res.json({success: true, result :result});
                });

    }
    res.json({success: false , message: "server error"})
})

module.exports = router;