const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/api');
const path = require('path');
require('dotenv').config();

//express middleware between front and back
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//set port or heroku set up//
const port = process.env.PORT || 5000;

//connect to the database
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/kat_ed", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(
    () => {
      console.log("CONNECTED TO MONGO");
    },
    (err) => {
      console.log("ERROR CONNECTING TO MONGO:", err);
    }
  );

//mongoose promise is depricated, we overide it with nodes's promise
mongoose.Promise = global.Promise; 

//connect routes
app.use('/api', routes);

//application level middleware.
app.use(function (req, res, next) {
    console.log('Time:', Date.now(), ' ||| Type: ', req.method)
    next()
  })





//Start the api server
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});