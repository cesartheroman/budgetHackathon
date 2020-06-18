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
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTransactions = this.getTransactions.bind(this);
  }
  
  getTransactions() {
    axios
      .get('/transactions')
      .then((listOfTransactions) => {
        console.log('these are transactions', listOfTransactions);
        this.setState({
          transactions: listOfTransactions.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getTransactions();
  }
  
  handleSubmit(e, transactionObj) {
    e.preventDefault();
    axios.post('/transactions', transactionObj)
      .then(() => {
        this.getTransactions();
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="app">
        <p className="title">B U D G E T A P P</p>
<<<<<<< HEAD
        <div className="input-income">{/* <IncomeInput /> */}</div>
        <div className="input-transaction"><TransactionInput handleSubmit={this.handleSubmit}/></div>
=======
        <div className="input-income">
          <IncomeInput />
        </div>
        <div className="input-transaction">{/* <TransactionInput /> */}</div>
        <div className="input-categories">{/* <Categories /> */}</div>
>>>>>>> 971f520d55599a876780f9ef599bd25c7ab7cae6
        <div className="transactions-container">
          <TransactionList transactions={this.state.transactions} />
        </div>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
