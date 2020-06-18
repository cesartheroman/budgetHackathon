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
                <input type="submit" value="Submit" onSubmit={(event) => this.props.handleSubmit(event, this.state)}/>
                <br/>
           </form>
        );
    }
};

export default TransactionInput;
