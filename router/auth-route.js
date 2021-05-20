const router = require('express').Router()
const User = require('../model/user')
const Employee = require('../model/employee');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const config = require('../config/config')
router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email })
        .exec()
        .then((result) => {
            if (result) {
                return res.json({ success: false, message: "Email already exists" });
            }
            bcrypt.hash(req.body.password, 10, function (err, hash) {
                if (err) {
                    return res.json({ success: false, message: 'There is an issue with password' });
                }
                const user = new User({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    password: hash,
                    employeeId: req.body.employeeId,
                    organization: req.body.organization
                })
                user.save()
                    .then((data) => {
                        res.json({ success: true, message: 'Account has been created' })
                    })
                    .catch((err) => {
                        res.json({ success: false, message: err })
                    })
            });

        })

})

router.post('/login', (req, res) => {
    User.find({email:req.body.email})
        .exec()
        .then(user => {
            if(user.length < 1) {
                return res.json({success: false, message: "Auth failed"})
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if(err) {
                    return res.json({success: false, message: "Password not matched"})
                }
                if(result) {
                   const token  = jwt.sign(
                       {
                           userId: user[0]._id
                       },
                       config.store.JWT_KEY,
                       {
                        expiresIn: "1h"
                       }

                   );
                   return res.json({success: true, message: "Auth Successful", token: token})
                }
            });
        }).catch((err) => {
            res.json({success: true, message: "Auth failed"})
        })
})

module.exports = router;