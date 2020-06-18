const { Transaction } = require('../models/models.js');

module.exports = {
  getAll: (req, res) => {
    //Transaction.find().then().catch()
    // res.sendStatus(200);
  },

  postAll: (req, res) => {
    //Transaction.create().then().catch()
    res.send(201);
  },
};
