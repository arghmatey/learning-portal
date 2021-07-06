const User = require('../models/user');

module.exports = {
  getAll,
  create,
  update,
};

async function getAll(req, res) {
  let user = await User.findById(req.params.uid);
  res.status(200).json(user.tasks);
}

async function create(req, res) {
  let user = await User.findByIdAndUpdate(
    req.params.uid,
    {$push: {"tasks": req.body}},
    {upsert: true, new: true}
  );
  const newTask = user.tasks[user.tasks.length - 1];
  res.status(200).json(newTask);
}

async function update(req, res) {
  const updatedUser = await User.findOneAndUpdate(
    req.params.uid, 
    { 
      $set: {
        "tasks.$[el].completed": req.body.completed,
        "tasks.$[el].text": req.body.text
      } 
    }, 
    {
      arrayFilters: [{ "el._id": req.params.tid }],
      upsert: true, 
      new: true
    }
  );
  res.status(200).json(updatedUser);
}