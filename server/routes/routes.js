var { getAll, postAll } = require('../controllers/controllers.js');
var router = require('express').Router();

router.get('/transactions', getAll);
router.post('/', postAll);

module.exports = router;
