import React from 'react';
import TransactionInput from './TransactionInput.jsx';
import TransactionListEntry from './TransactionListEntry.jsx';

const TransactionList = (props) => {
  return (
    <table className="font container">
      <thead>
        <tr>
          <th colSpan="6">My Transactions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="font">Date</th>
          <th className="font">Description</th>
          <th className="font">Amount</th>
          <th className="font">Type</th>
          <th className="font">Category</th>
          <th className="font">Account Name</th>
        </tr>
        {props.transactions.map((transaction) => {
          return <TransactionListEntry key={transaction._id} transaction={transaction} />;
        })}
      </tbody>
    </table>
  );
};

export default TransactionList;
