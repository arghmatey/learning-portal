const router = require('express').Router();
const tasksCtrl = require('../../controllers/tasks');

router.post('/:uid/tasks', tasksCtrl.create);

module.exports = router;