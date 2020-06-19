import React from 'react';
class IncomeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      income: '',
      sum: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      income: event.target.value,
    });
    console.log(this.state.income);
  }
  changeHandler(event) {
    event.preventDefault();
    this.setState({
      income: event.target.value,
    });
  }
  render() {
    return (
      <div className="container column">
        <form className="font income-form">
          <h4>Input your income here!</h4>
          <input
            type="number"
            name="income"
            placeholder="i.e. 50000"
            value={this.state.income}
            onChange={(event) => this.changeHandler(event)}
            onSubmit={this.handleSubmit}
          ></input>
        </form>
        <p className="font small-font">This is your income: {this.state.income}</p>
        <p className="font small-font">This is how much you've spent so far: {this.props.sumOfCharges}</p>
        <p className="font small-font" value={this.state.income}>
          This is much you have left in your budget:{' '}
          {this.state.income - this.props.sumOfCharges.toFixed(2)}
        </p>
      </div>
    );
  }
}

export default IncomeInput;
