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
      currentMonth: '',
      filteredTransactions: [],
      sum: 0
    };

    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.getTransactions = this.getTransactions.bind(this);
  }
  
  getTransactions() {
    axios
      .get('/transactions')
      .then((listOfTransactions) => {
        console.log('these are transactions', listOfTransactions);
        const sumOfAmounts = listOfTransactions.data.map((charge) => {
          return charge.amount;
        }).reduce((accum, current) => accum + current);
        console.log(sumOfAmounts);
        this.setState({
          transactions: listOfTransactions.data,
          sum: sumOfAmounts
        });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleMonthChange(e) {
    let temp = e.target.value.toString();
    console.log('CHECK ME OUT', temp);
    this.setState({
      currentMonth: temp
    }, () => {
      const filteredTrans = this.state.transactions.filter((transaction) => {
        let month = transaction.date.slice(5, 7);
        return month == this.state.currentMonth;
      })
      console.log('this should be an array of trans in current month', filteredTrans);
      this.setState({
        filteredTransactions: filteredTrans
      });
      console.log('checking state', this.state);
    });
  }

  componentDidMount() {
    this.getTransactions();
  }

  render() {
    return (
      <div className="app">
        <p className="title">M Y   B U D G E T</p>
        <div className="column input-income">
          <IncomeInput sumOfCharges={this.state.sum}/>
        </div>
        <div className="column input-transaction"><TransactionInput getTransactions={this.getTransactions}/></div>
        <div className="column transactions-container">
          <TransactionList handleMonthChange={this.handleMonthChange} transactions={this.state.currentMonth ? this.state.filteredTransactions : this.state.transactions} />
        </div>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
