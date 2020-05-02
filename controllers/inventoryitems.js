const db = require('../models');
const InventoryItem = db.InventoryItem;

module.exports = {
    add: (req, res) => {
        let result = {};
        let status = 201;

        const { type, data } = req.body;
        const username = req.decoded.user;

        User.findOne({
            username
        }).then(user => {
            return InventoryItem.create({
                type: type, 
                data: JSON.stringify(data),
                seq: 1,
                user: user
            })
        }).then(item => {
            item.data = JSON.parse(item.data);
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

        InventoryItem.findOne({id})
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
    update: (req, res) => {
        let result = {};
        const data = req.body;
        const username = req.decoded.user;

        User.findOne({
            username
        }).then(user => {
            //TODO: do user authentication. Only admin can do this action
            return InventoryItem.update(data, {where: {id: req.params.id}})
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
    getAll: (req, res) => {
        const User = db.User;
        const username = req.decoded.user;

        User.findOne({
            username
        }).then(user => {
            return InventoryItem.findAll({user: user});
        }).then(items => {
            res.send(items);   
        }).catch(err => {

        })
    }
}