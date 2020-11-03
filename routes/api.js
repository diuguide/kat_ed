const express = require('express');
const User = require('../models/Model');
const router = express.Router();

router.get('/User', (req, res) => {
    User.find({})
        .then(data => res.json(data))
        .catch(err => console.log('err', err))
});

router.post('/User', (req, res) => {
    console.log('req.body: ', req.body);
    User.create(req.body)
        .then(data => {
            res.json(data)
            console.log('success!');
        })
        .catch(err => console.log('err', err))
});

router.delete('/User/:id', (req, res) => {
    User.findOneAndDelete({ "_id": req.params.id })
        .then(data => res.json(data))
        .catch(err => console.log('err', err))
})

module.exports = router;