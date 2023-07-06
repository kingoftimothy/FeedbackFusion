const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Schema = mongoose.Schema; above line is destructuring

const userSchema = new Schema({
    googleId: String,
    githubId: String
});

mongoose.model('users', userSchema);