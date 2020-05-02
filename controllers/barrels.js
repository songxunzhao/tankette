const db = require('../models');
const Barrel = db.Barrel;

module.exports = {
    add: (req, res) => {
        let result = {};
        let status = 201;

        const data = req.body;
        const username = req.decoded.user;

        Barrel.findOne({name: data.name})
        .then(item => {
            if(item != null) {
                status = 400;
                result.status = status;
                result.message = "Item with same name already exist"
            } else {
                return Barrel.create(data)
            }
        }).then(item => {
            result.status = status;
            result.result = item;
        }).catch(err => {
            status = 500;
            result.status = status;
            result.error = err;
        }).finally(() => {
            res.status(status).send(result)
        });
    },
    update: (req, res) => {
        let result = {};
        const data = req.body;
        const username = req.decoded.user;

        User.findOne({
            username
        }).then(user => {
            //TODO: do user authentication. Only admin can do this action
            return Barrel.update(data, {where: {id: req.params.id}})
        }).then(item => {
            result.status = status;
            result.result = item;
        }).catch(err => {
            status = 500;
            result.status = status;
            result.error = err;
        }).finally(() => {
            res.status(status).send(result)
        });
    },
    getOne: (req, res) => {
        const id = req.params.id;
        const result = {};

        Barrel.findOne({id})
        .then(item => {
            result.status = 200;
            result.result = item;
        })
        .catch(err => {
            result.status = 500;
            result.error = err;
        })
        .finally(() => {
            res.status(result.status).send(result);
        });
    },
    getAll: (req, res) => {
        const User = db.User;
        const username = req.decoded.user;

        User.findOne({
            username
        }).then(user => {
            //TODO: do some filtering process
            return Barrel.findAll();
        }).then(items => {
            res.send(items);   
        }).catch(err => {

        })
    }
}