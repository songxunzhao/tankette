const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = db.User;

module.exports = {
    add: (req, res) => {
        let result = {};
        let status = 201;

        const { username, password } = req.body;
        User.create({
            username, password
        }).then(user => {
            result.status = status;
            result.result = user;
        }).catch(err => {
            status = 500;
            result.status = status;
            result.error = err;
        }).finally(() => {
            res.status(status).send(result);
        })
    },
    update: (req, res) => {
        let result = {};
        let status = 200;
        const username = req.decoded.user;
        const data = req.data;
        User.update(
            data, 
            {where: {username}}
        ).then(item => {
            result.status = status;
            result.result = item;
        }).catch(err => {
            status = 500;
            result.status = status;
            result.error = err;
        }).finally(() => {
            res.status(status).send(result)
        });;
    },
    login: (req, res) => {
        const { username, password } = req.body;

        let result = {};
        let status = 200;
        User.findOne(
            {where: {username}}
        ).then(user => {
            bcrypt.compare(password, user.get('password')).then(match => {
                if (match) {
                    const payload = { user: user.username };
                    const options = { expiresIn: '2d', issuer: 'https://scotch.io' };
                    const secret = process.env.JWT_SECRET;
                    const token = jwt.sign(payload, secret, options);

                    result.token = token;
                    result.status = status;
                    result.result = user;
                } else {
                    status = 401;
                    result.status = status;
                    result.error = 'Authentication error';
                }
                res.status(status).send(result);
              }).catch(err => {
                status = 500;
                result.status = status;
                result.error = err;
                res.status(status).send(result);
              });
        }).catch(err => {
            status = 404;
            result.status = status;
            result.error = err;
            res.status(status).send(result);
        });
    },
    getAll: (req, res) => {
        User.findAll({}).then(users => {
            res.send(users);   
        })
    }
}