const User = require('../database/models/user');
const express = require('express');
const registerUser = express.Router();

registerUser.use(express.json());
registerUser.post('/register', (req, res) => {
    const newNumber = req.body.number;
    const newName = req.body.name;
    const newPassword = req.body.password;

    User.sync()
    .then(() => {
        return User.findAll({
            attributes: ['number'],
            where: {number: newNumber}});
    })
    .then((data) => {
        if(data.length!==0)
            res.status(409)
            .json({err: 'User already exists with this number.'});
        else{
            const user = User.build({
                number: newNumber,
                name: newName,
                password: newPassword,
            });

            if(req.body.email)
                user.email = req.body.email;
            user.save();
            console.log('registration successful');
            res.status(201).json(user);
        }
    }).catch((err) => {
        res.status(422).json(err);
    });
});

module.exports = registerUser;