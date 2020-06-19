import React from 'react';
import axios from 'axios';

class TransactionInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '', 
            description: '',
            amount: 0, 
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
           <form>
                <label>Date:  
                    <input type="text" name="date" value={this.state.date} onChange={this.handleChange} />
                </label>
                <br/>
                <label>Description:  
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                </label>
                <br/>
                <label>Amount:  
                    <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange} />
                </label>
                <br/>
                <label>Type:  
                    <select name="transactionType" onChange={this.handleChange}>
                        <option value="" disabled selected hidden>Debit Or Credit</option>
                        <option value="debit">Debit</option>
                        <option value="credit">Credit</option>
                    </select>
                </label>
                <br/>
                <label>Category:  
                    <select name="category" required onChange={this.handleChange}>
                        <option value="" disabled selected hidden>Pick One Category</option>
                        <option value="gym">Gym</option>
                        <option value="shopping">Shopping</option>
                        <option value="mortgage/rent">Mortgage/Rent</option>
                        <option value="groceries">Groceries</option>
                        <option value="paycheck">Paycheck</option>
                        <option value="pharmacy">Pharmacy</option>
                        <option value="publicTransportation">Public Transportation</option>
                        <option value="restaurants">Restaurants</option>
                        <option value="vacation">Vacation</option>
                    </select>
                </label>
                <br/>
                <label>Account:  
                    <select name="accountName" onChange={this.handleChange}>
                        <option value="" disabled selected hidden>Choose One</option>
                        <option value="amex">Amex</option>
                        <option value="mastercard">Mastercard</option>
                        <option value="visa">Visa</option>
                        <option value="bankAccount">Bank Account</option>
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
