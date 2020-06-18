const { Transactions } = require('../models/models.js');

module.exports = {
  getAll: (req, res) => {
    Transactions.find()
      .exec()
      .then((results) => {
        res.json(results);
      })
      .catch((err) => res.sendStatus(500));
  },

  postAll: (req, res) => {
    Transactions.create(req.body)
      .then((results) => {
        console.log('these are post results', results);
        res.send(201);
      })
      .catch((err) => console.error(err));
  },
};
