const express = require('express');
const router = express.Router();
const appsCtrl = require('../../controllers/favApps');

router.get('/', appsCtrl.index);
router.post('/', appsCtrl.create);
router.get('/getFavList', appsCtrl.getFavList)

module.exports = router;