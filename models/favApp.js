const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const favAppsSchema = new Schema({
    favoritedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    name: String,
    url: String,
    img: String
})

module.exports = mongoose.model('Fav', favAppsSchema);