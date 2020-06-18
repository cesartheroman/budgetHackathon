const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  date: Date,
  description: String,
  amount: Number,
  transactionType: String,
  category: String,
  accountName: String,
});

const Transactions = mongoose.model('Transactions', transactionSchema);

module.exports.Transactions = Transactions;
