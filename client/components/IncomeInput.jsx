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
          <label>What is your yearly income? <br/>
            <input
              type="number"
              name="income"
              placeholder="i.e. 50000"
              value={this.state.income}
              onChange={(event) => this.changeHandler(event)}
              onSubmit={this.handleSubmit}
            ></input>
          </label>
        </form>
        <p className="font small-font">Yearly Income: ${this.state.income}</p>
        <p className="font small-font">Spent: ${this.props.sumOfCharges}</p>
        <p className="font small-font" value={this.state.income}>
          How much you have left: ${this.state.income - this.props.sumOfCharges.toFixed(2)}
        </p>
      </div>
    );
  }
}

export default IncomeInput;
