const User = require('../models/user');

module.exports = {
  create,
};

function create(req, res) {
  User.findById(req.params.uid, function (err, user) {
    if (err) console.log('create controller error');
    console.log(req.body)
  })
}