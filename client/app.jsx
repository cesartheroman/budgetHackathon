import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import IncomeInput from './components/IncomeInput.jsx';
import TransactionInput from './components/TransactionInput.jsx';
import TransactionList from './components/TransactionList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      currentMonth: '00',
      filteredTransactions: [],
      sum: 0
    };

    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.getTransactions = this.getTransactions.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.filterTransactions = this.filterTransactions.bind(this);
  }
  
  getTransactions() {
    axios
      .get('/transactions')
      .then((listOfTransactions) => {
        const sumOfAmounts = listOfTransactions.data.map((charge) => {
          return charge.amount;
        }).reduce((accum, current) => accum + current);
        this.setState({
          transactions: listOfTransactions.data,
          sum: sumOfAmounts
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  filterTransactions() {
    console.log('we got through to filtering after a handle month change!');
    const filteredTrans = this.state.transactions.filter((transaction) => {
      let month = transaction.date.slice(5, 7);
      return month == this.state.currentMonth;
    })
    console.log('this should be an array of trans in current month', filteredTrans);
    this.setState({
      filteredTransactions: filteredTrans
    });
    console.log('checking state', this.state);
  }

  handleMonthChange(e) {
    let temp = e.target.value.toString();
    console.log('CHECK ME OUT', temp);
    this.setState({
      currentMonth: temp
    }, this.filterTransactions);
  }
  
  clickHandler(e, transactionObj) {
    console.log('clicked!', transactionObj);
    axios.delete(`/transactions/${transactionObj._id}`)
      .then(() => {
        return this.getTransactions();
      })
      .then(() => {
        console.log('we grabbed the new list after deleting, now we will filter');
        this.filterTransactions();
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getTransactions();
  }

  render() {
    return (
      <div className="app">
        <p className="title">M Y   B U D G E T</p>
        <div className="column input-transaction"><TransactionInput getTransactions={this.getTransactions}/></div>
        <div className="column input-income">
          <IncomeInput sumOfCharges={this.state.sum}/>
        </div>
        <div className="column transactions-container">
          <TransactionList handleMonthChange={this.handleMonthChange} clickHandler={this.clickHandler} transactions={(this.state.currentMonth === '00') ? this.state.transactions : this.state.filteredTransactions} />
        </div>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
