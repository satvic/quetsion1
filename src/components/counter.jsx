import React, { Component } from "react";

class Counter extends Component {
  state = {
    numbers: [
      1, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 236, 2123,
      212383, 89, 71, 72,
    ],
  };

  evenNum() {
    let evens = [];
    for (let i = 0; i < this.state.numbers.length; i++) {
      if (this.state.numbers[i] % 2 === 0) evens.push(this.state.numbers[i]);
    }

    return (
      <div className="col-lg-2 mx-auto">
        <p className="lead text-center text-success">Even numbers </p>
        <ul className="list-group text-center">
          {evens.map((even) => (
            <li key={even} className="list-group-item">{even}</li>
          ))}
        </ul>
      </div>
    );
  }
  render() {
    return <div>{this.evenNum()}</div>;
  }
}

export default Counter;
