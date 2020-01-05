/* BACKEND: sever-side */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create our express app!
const app = express();
// tell our app to use body parser 
// bodyParser module: take json that is in the client to the server and parse it for us
// JSON은 일종의 데이터 표현 방법
app.use(bodyParser.json());

// Create routes
const employee = require('./routes/employee');
app.use('/crud/employee', employee);

// pw : 82t1xLo3kwIBUZ0a
if(process.env.NODE_ENV === 'production') {
    // it's gonna tell express where our static files located
    app.use(express.static('client/build'));
    // Miracle line of code makes it work somehow, what is this line of code?
    app.use('*', express.static('client/build'));
    // Serve our react app, * : any get request, send our react app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

const uri = process.env.mongodb || 'mongodb://localhost:27017/mernstack';

// connect to database
// mernstack is just datebase name, it can be anything
mongoose.connect(uri,
{
    // to avoid deprecate warning
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false

// call back function for error in case err happens
}, (err) => {
    if(err) {
        console.log('unable to connect to database');
        process.exit(1);
    }
    else {
        console.log('successfully connected to the database');
    }
});

// Set up Port
/*
process.env.PORT : when we deploy our app online, it's going to check env varaible called PORT
if there isn't it's gonna set default to port 5000. The reason we use port 5000 is 
create react app listens on port 3000, and we can't have two apps listening on same port
*/
const port = process.env.PORT || 5000;
// Tell express app to start
app.listen(port, () => {
    console.log(uri);
    console.log(`app is running on port: ${port}`);
});