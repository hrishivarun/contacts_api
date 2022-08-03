This is Backend project completed using Nodejs/Express/Sequelize(MySQL), 
where you can connect to a Relational Database from Nodejs/Express server, using Sequelize(ORM), and 

1)either register as a user to the database with your name and number on "/register" route, 
2)login with your credentials(number and password) on "/login" route, and 
3)search for contact details by searching parital/complete number available in the database, on "/search".

The routes currently take input in form of JSON data from the Front-end, process it acordingly, 
and return a JSON response to the Front-end. 

With a little tweak, it can even accept data from a Front-end form, along with in the form of JSON.