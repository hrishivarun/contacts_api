const Sequelize = require('sequelize');
const sequelize = new Sequelize('global_database', 'root', 'Hrishi@009', {
    host: 'localhost',
    dialect: 'mysql'
});

// sequelize.authenticate()
// .then((result) => {
//     console.log(` Successful Connection - ${result}`);
// }).catch((err) => {
//     console.log(err);
// });

module.exports = sequelize;