import React from 'react';
import axios from 'axios';

class TransactionInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '', 
            description: '',
            amount: 0, 
            category: '',
            accountName: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        axios.post('/', this.state)
          .then(() => {})
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
                <label>Category:  
                    {/* <Categories value={this.state.category} onChange={this.handleChange} /> */}
                </label>
                <br/>
                <label>Account Name:  
                    <select name="accountName" onChange={this.handleChange}>
                        <option value="debit">debit</option>
                        <option value="credit">credit</option>
                    </select>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
                <br/>
           </form>
        );
    }
};

export default TransactionInput;
