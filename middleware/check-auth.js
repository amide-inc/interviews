const jwt  = require('jsonwebtoken');
const keys = require('../config/config');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, keys.store.JWT_KEY);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.json({ success : false, error: 'Auth failed'});
    }
};