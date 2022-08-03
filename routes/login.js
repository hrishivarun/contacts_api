const User = require('../database/models/user');
const express = require('express');
const loginUser = express.Router();
let loggedIn = true;

loginUser.use(express.json());
loginUser.post('/login', (req, res) => {
    const number = req.body.number;
    const password = req.body.password;

    User.sync()
    .then(() => {
        return User.findAll({where: {
            number: number,
            password: password
        }});
    })
    .then((data) => {
        if(data.length===0)
            res.status(401)
            .send({err: 'Invalid login details. Please try again'});
        else{
            loggedIn = true;
            res.status(200).json({
                message: 'login success',
                redirectTo: '/'
            });
        }
    })
});

module.exports = {
    loginUser,
    loggedIn
};