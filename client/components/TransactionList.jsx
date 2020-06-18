import React from 'react';
import TransactionInput from './TransactionInput.jsx';
import Categories from './Categories.jsx';
import TransactionListEntry from './TransactionListEntry.jsx';

const TransactionList = (props) => {
  <table>
    <thead>
      <tr>
        <th colspan="6">My Transactions</th>
      </tr>
    </thead>
    <tbody>
      {props.transactions.map((transaction) => {
        return <TransactionListEntry transaction={transaction} />;
      })}
    </tbody>
  </table>;
};

export default TransactionList;
