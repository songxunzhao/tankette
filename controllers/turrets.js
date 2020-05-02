const db = require('../models');
const Turret = db.Turret;

module.exports = {
    add: (req, res) => {
        let result = {};
        let status = 201;

        const data = req.body;
        const username = req.decoded.user;
        
        // Check if already exist
        Turret.findOne({name: data.name})
        .then(item => {
            if(item != null) {
                status = 400;
                result.status = status;
                result.message = "Item with same name already exist"
            } else {
                return Turret.create(data)
            }
        })
        .then(item => {
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

        Turret.findOne({id})
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

        Turret.update(data, {where: {id: req.params.id}})
        .then(item => {
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
            //TODO: do some filtering process
            return Turret.findAll();
        }).then(items => {
            res.send(items);   
        }).catch(err => {

        })
    }
}