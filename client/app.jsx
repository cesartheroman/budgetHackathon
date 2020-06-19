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
  
 

  render() {
    return (
      <div className="app">
        <p className="title">B U D G E T A P P</p>
        <div className="input-income">
          <IncomeInput />
        </div>
        <div className="input-transaction"><TransactionInput getTransactions={this.getTransactions}/></div>
        <div className="transactions-container">
          <TransactionList transactions={this.state.transactions} />
        </div>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
