const express = require('express');

const { loggedIn } = require('./login');
const User = require('../database/models/user');

const searchUser = express.Router();

searchUser.use(express.json());
searchUser.get('/search', (req, res) => {
    if(loggedIn){
        const number = req.body.number;
        User.sync()
        .then(() => {
            return User.findAll({
                attributes: {exclude: ['password']},
                where: {number: number}
            });
        }).then((data) => {
            console.log(data[0].dataValues);
            res.status(200).json(data);
        });
    }else{
        res.status(403).json({
            message: 'You need to be logged in to search numbers.'
        });
    }
});

module.exports = searchUser;