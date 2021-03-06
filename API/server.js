const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");


//import mongo db
const mongoose = require('mongoose');
//import the db js file
const config = require('./DB');
const businessRoute = require('./business.route');



//connect to the database
mongoose.Promise = global.Promise;
mongoose.connect(config.DB,
  { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') }, err => { console.log('cannot connect to the database' + err) }
  );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/business', businessRoute);

app.listen(PORT, function () {
  console.log("server is running on port:", PORT);
});
