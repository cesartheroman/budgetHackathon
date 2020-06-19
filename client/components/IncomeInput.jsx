import React from 'react';
class IncomeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      income: '',
      sum: 0,
      done: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      income: event.target.value,
      done: true,
    });
  }

  changeHandler(event) {
    event.preventDefault();
    console.log('event target value', event.target);
    this.setState({
      income: event.target.value,
    });
  }
  render() {
    return (
      <div className="container column">
        {!this.state.done ? (
          <form className="font income-form">
            <label>
              What is your yearly income? <br />
              <input
                type="number"
                name="income"
                placeholder="i.e. 50000"
                value={this.state.income}
                onChange={(event) => this.changeHandler(event)}
              ></input> <br/>
              <button
                value={this.state.income}
                onClick={(event) => this.handleSubmit(event)}
              >
                Submit income!
              </button>
            </label>
          </form>
        ) : (
          <div className='box'>
            <p className="font">Yearly Income: <span className='bold'>${this.state.income}</span></p>
            <p className="font">
              Spent: <span className='bold'>${this.props.sumOfCharges.toFixed(2)}</span>
            </p>
            <p className="font" value={this.state.income}>
              How much you have left: 
              <span className='bold'>${(this.state.income - this.props.sumOfCharges).toFixed(2)}</span>
            </p>
          </div>
        )}
        </div>

    );
  }
}

export default IncomeInput;
