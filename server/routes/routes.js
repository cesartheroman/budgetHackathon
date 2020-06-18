var { getAll, post } = require('../controllers/controllers.js');
var router = require('express').Router();

router.get('/transactions', getAll);
router.post('/transactions', post);

module.exports = router;
