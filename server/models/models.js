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

const Transaction = mongoose.model('Transactions', transactionSchema);

module.exports.Transaction = Transaction;
