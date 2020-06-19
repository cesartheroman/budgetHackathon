import React from 'react';
import TransactionInput from './TransactionInput.jsx';
import TransactionListEntry from './TransactionListEntry.jsx';

class TransactionList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      month: ''
    }
    this.handleMonthChange = this.handleMonthChange.bind(this);
  }

  handleMonthChange(e) {
    this.setState({
      month: e.target.value
    })
  }
  
  render() {
    return (
      <table className="font container">
        <thead>
          <tr>
            <th colSpan="4">My Transactions for the month of</th>
            <th colSpan="2">
              <select name="month" onChange={this.handleMonthChange}>
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
          </tr>
          {this.props.transactions.filter((transaction) => {
            transaction.date.slice(5, 7) === this.state.month;
          })}
          {/* {this.props.transactions.map((transaction) => {
            return <TransactionListEntry key={transaction._id} transaction={transaction} />;
          })} */}
        </tbody>
      </table>
    );
  }
};

export default TransactionList;
