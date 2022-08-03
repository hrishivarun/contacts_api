const Sequelize = require('sequelize');
const sequelize = require('../connection');

const User = sequelize.define('contact', {
    number: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

User.sync({force: true})
.then(() => {
    console.log('table synced with model.');
}).catch((err) => {
    console.log(err);
});