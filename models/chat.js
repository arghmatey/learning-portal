const mongoose = require('mongoose');

const message = new mongoose.Schema ({
    body: String,
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    read: Boolean
}, {
    timestamps: true
});

const chatSchema = new mongoose.Schema({
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    messages: [message]
})

module.exports = mongoose.model('Chat', chatSchema)