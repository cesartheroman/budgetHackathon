import React from 'react';

const TransactionListEntry = (props) => {
  <tr>
    <td>{props.transaction.date}</td>
    <td>{props.transaction.description}</td>
    <td>{props.transaction.amount}</td>
    <td>{props.transaction.type}</td>
    <td>{props.transaction.category}</td>
    <td>{props.transaction.accountName}</td>
  </tr>;
};

export default TransactionListEntry;
