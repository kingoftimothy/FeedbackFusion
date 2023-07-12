const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Schema = mongoose.Schema; above line is destructuring

const userSchema = new Schema({
    googleId: String,
    githubId: String,
    credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);