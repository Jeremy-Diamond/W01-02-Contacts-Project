const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId; // get primary key

const getAll = async (req, res) => {
    try {
        const result = await mongodb.getDb().db().collection('contacts').find();
        result.toArray().then((contacts) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(contacts);
        });
             } catch (err) {
                res.status(500).json({message: err.message});
            }
        };

const getSingle = async (req, res) => {
    try {
        const contactId = new ObjectId(req.params.id);
        const result = await mongodb.getDb().db().collection('contacts').find({_id: contactId});
        result.toArray().then((contacts) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(contacts[0]);
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

module.exports = {
    getAll,
    getSingle
};

