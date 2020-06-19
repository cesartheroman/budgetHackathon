import React from 'react';
import moment from 'moment';

const TransactionListEntry = (props) => {
  let date = moment(props.transaction.date).format("MMM Do YY");  
  return (
    <tr className="font small-font">
      <td>{date}</td>
      <td>{props.transaction.description}</td>
      <td>${props.transaction.amount}</td>
      <td>{props.transaction.transactionType}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.accountName}</td>
      <td><button onClick={(e) => props.clickHandler(e, props.transaction)}>Delete</button></td>
    </tr>
  );
};

export default TransactionListEntry;
