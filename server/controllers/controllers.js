const { Transaction } = require('../models/models.js');

module.exports = {
  getAll: (req, res) => {
    Transaction.find()
      .then((results) => {
        // console.log
        // res.json(200);
      })
      .catch((err) => res.sendStatus(500));
  },

  postAll: (req, res) => {
    //Transaction.create().then().catch()
    res.send(201);
  },
};
