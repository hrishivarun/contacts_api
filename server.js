const express = require('express');
const app = express();

const registerUser = require('./routes/registration');
const loginUser = require('./routes/login');
const searchUser = require('./routes/search');

app.use(registerUser);
app.use(loginUser);
app.use(searchUser);

app.get('/', (req, res) => {
    if(loggedIn)
        res.send(`You're logged in. Enjoy your time on the site.`);
    else
        res.send(`Please login/register, on '/login' and '/register' respectively`);
});

app.listen(3000, () => {
    console.log(`listening on PORT 3000`);
});