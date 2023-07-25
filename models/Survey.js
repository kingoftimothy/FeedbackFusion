const RecipientSchema = require('./Recipient');

const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' }, // _ is for relationship field (referece) between given User and Schema
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);