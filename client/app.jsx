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
      sum: 0
    };

   
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

  componentDidMount() {
    this.getTransactions();
  }
  
 

  render() {
    return (
      <div className="app">
        <p className="title">B U D G E T A P P</p>
        <div className="column input-income">
          <IncomeInput sumOfCharges={this.state.sum}/>
        </div>
        <div className="column input-transaction"><TransactionInput getTransactions={this.getTransactions}/></div>
        <div className="column transactions-container">
          <TransactionList transactions={this.state.transactions} />
        </div>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
