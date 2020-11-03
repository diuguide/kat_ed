const express = require('express');
const User = require('../models/Model');
const router = express.Router();

router.get('/User', (req, res, next) => {
    User.find({}, 'action')
        .then(data => res.json(data))
        .catch(next)
});

router.post('/User', (req, res, next) => {
    if (req.body.action) {
        User.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    } else {
        res.json({
            error: "input field is empty"
        })
    }
});

router.delete('/User/:id', (req, res, next) => {
    User.findOneAndDelete({ "_id": req.params.id })
        .then(data => res.json(data))
        .catch(next)
})

module.exports = router;