import React from 'react';

class TransactionInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: null, 
            description: '',
            amount: null, 
            category: null,
            accountName: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {

    }

    handleChange(e) {

    }

    render() {
        return (
            <div>
            
            </div>
        );
    }
};

export default TransactionInput;
