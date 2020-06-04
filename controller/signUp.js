const { transaction } = require('objection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/users');



async function createUser(req, res, next) {
    let trx = null;
    try {
        // trx = await transaction.start(User.knex());
        // const password =bcrypt.hashSync(req.body.password,process.env.SALT_ROUNDS);
        // const token = jwt.sign(
        //     { email: req.body.email },
        //     process.env.JWT_SECRET_TOKEN,
        // );
        const user = await User.query(trx).insert({
            name: req.body.name,            
            email: req.body.email,
            password:req.body.password,
        }).returning('*');
        // await trx.commit();
        res.status(200).json({
            success: true,
        });
    } catch (error) {
        // if (trx) {
        //     await trx.rollback();
        // }
        next(error);
    }
}

module.exports = exports = createUser;
