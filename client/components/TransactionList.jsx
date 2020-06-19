import React from 'react';
import TransactionInput from './TransactionInput.jsx';
import TransactionListEntry from './TransactionListEntry.jsx';

const TransactionList = (props) => {

  return (
    <table className="font container">
      <thead>
        <tr>
          <th colSpan="5">My Transactions</th>
          <th colSpan="2">
            <select name="currentMonth" onChange={(e) => props.handleMonthChange(e)}>
              <option value="" disabled selected hidden>Choose Month</option>
              <option value="00">View All</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </th>
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
          <th></th>
        </tr>
        {props.transactions.map((transaction) => {
          return <TransactionListEntry key={transaction._id} transaction={transaction} clickHandler={props.clickHandler}/>;
        })}
      </tbody>
    </table>
  );

};

export default TransactionList;
