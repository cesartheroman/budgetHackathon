import React from 'react';
class IncomeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      income: '',
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
      <div>
        <form className="income-form">
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
        <p>This is your income: {this.state.income}</p>
      </div>
    );
  }
}

export default IncomeInput;
