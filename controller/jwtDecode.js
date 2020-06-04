const jwt = require('jsonwebtoken');

const jwtDecode = async (req, res, next) => {
    try {
        req.token = jwt.verify(req.headers['token'], process.env.JWT_SECRET_TOKEN);
        next();
    } catch (err) {
        next(err);
    }
}

module.exports = exports = jwtDecode;