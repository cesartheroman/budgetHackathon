import React from 'react';
import TransactionInput from './TransactionInput.jsx';
import TransactionListEntry from './TransactionListEntry.jsx';

const TransactionList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="6">My Transactions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Account Name</th>
        </tr>
        {props.transactions.map((transaction) => {
          return <TransactionListEntry key={transaction._id} transaction={transaction} />;
        })}
      </tbody>
    </table>
  );
};

export default TransactionList;
