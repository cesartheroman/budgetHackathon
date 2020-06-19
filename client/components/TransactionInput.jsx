import React from 'react';
import axios from 'axios';
import moment from 'moment';

class TransactionInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '', 
            description: '',
            amount: '', 
            transactionType: '',
            category: '',
            accountName: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, transactionObj) {
        e.preventDefault();
        console.log('clicked!');
        console.log('this should be the object', transactionObj);
        axios.post('/transactions', transactionObj)
          .then(() => {
            this.props.getTransactions();
          })
          .catch((err) => console.log(err));
      }

    handleChange(e) {
        let transactionObj = {};
        transactionObj[e.target.name] = e.target.value;
        this.setState(transactionObj);
    }

    render() {
        return (
           <form className="font container">
                <label>Date:  
                    <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
                </label>
                <br/>
                <label>Description:  
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                </label>
                <br/>
                <label>Amount:  
                    <input type="number" name="amount" required value={this.state.amount} onChange={this.handleChange} />
                </label>
                <br/>
                <label>Type:  
                    <select name="transactionType" required onChange={this.handleChange}>
                        <option value="" disabled selected hidden>Debit Or Credit</option>
                        <option value="debit">Debit</option>
                        <option value="credit">Credit</option>
                    </select>
                </label>
                <br/>
                <label>Category:  
                    <select name="category" required onChange={this.handleChange}>
                        <option value="" disabled selected hidden>Pick One Category</option>
                        <option value="Gym">Gym</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Mortgage/Rent">Mortgage/Rent</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Paycheck">Paycheck</option>
                        <option value="Pharmacy">Pharmacy</option>
                        <option value="Public Transportation">Public Transportation</option>
                        <option value="Restaurants">Restaurants</option>
                        <option value="Vacation">Vacation</option>
                    </select>
                </label>
                <br/>
                <label>Account:  
                    <select name="accountName" onChange={this.handleChange}>
                        <option value="" disabled selected hidden>Choose One</option>
                        <option value="Amex">Amex</option>
                        <option value="Mastercard">Mastercard</option>
                        <option value="Visa">Visa</option>
                        <option value="Bank Account">Bank Account</option>
                    </select>
                </label>
                <br/>
                <button value="submit" onClick={(event) => this.handleSubmit(event, this.state)}>Add transaction</button>
                <br/>
           </form>
        );
    }
};

export default TransactionInput;
