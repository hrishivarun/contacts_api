const Sequelize = require('sequelize');
const sequelize = require('../connection');

const User = sequelize.define('user', {
    number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        default: null
    }
});

// User.sync()
// .then(() => {
//     const user = User.build({
//         number: 9521403938,
//         name: "HRISHIKESH",
//         password: "lalsinghchaddha",
//         email: "18132@iiitu.ac.in"
//     });
//     user.save();
//     console.log('table synced with model.');
// }).catch((err) => {
//     console.log(err);
// });

module.exports = User;