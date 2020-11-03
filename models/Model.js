const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: "Username is required",
    // validate: {
    //   validator: (v) => {
    //     // validates 99.99% of emails
    //     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    //       v
    //     );
    //   },
    //   message: (props) => `${props.value} is not a valid email address!`,
    // },
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required",
    // validate: {
    //   validator: (v) => {
    //     // between 8 & 15 charactors with at least
    //     // 1 lowercase letter
    //     // 1 uppercase letter
    //     // 1 numeric digit
    //     // 1 special character
    //     return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
    //       v
    //     );
    //   },
    //   message: () =>
    //     "Password must be between 8 to 15 characters and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character",
    // }
  } 
})

//create model for todo
const User = mongoose.model('user', UserSchema);

module.exports = User;