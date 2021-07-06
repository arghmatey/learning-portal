const router = require('express').Router();
const tasksCtrl = require('../../controllers/tasks');

router.get('/:uid', tasksCtrl.getAll);
router.post('/:uid', tasksCtrl.create);
router.put('/:uid/task/:tid', tasksCtrl.update);

module.exports = router;