var { getAll, post, deleteOne } = require('../controllers/controllers.js');
var router = require('express').Router();

router.get('/transactions', getAll);
router.post('/transactions', post);
router.delete('/transactions/:_id', deleteOne);

module.exports = router;
