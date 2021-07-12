const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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