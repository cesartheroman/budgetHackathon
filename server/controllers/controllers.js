const { Transactions } = require('../models/models.js');

module.exports = {
  getAll: (req, res) => {
    Transactions.find().sort('-date')
      .exec()
      .then((results) => {
        console.log(results);
        res.json(results);
      })
      .catch((err) => res.sendStatus(500));
  },

  post: (req, res) => {
    console.log('this is what we are getting from client', req.body);
    Transactions.create(req.body)
      .then((results) => {
        console.log('these are post results', results);
        res.send(201);
      })
      .catch((err) => console.error(err));
  },

  deleteOne: (req, res) => {
    console.log('this is req body:', req.params);
    console.log('this is the id:', req.params.id);
    Transactions.deleteOne(req.params)
      .then(() => res.sendStatus(201))
      .catch((err) => console.error(err));
  },
};
