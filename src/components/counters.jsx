import React, { Component } from "react";
import Counter from "./counter";
class counters extends Component {
  state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            selcted={true}
            id={counter.id}
          >
            <h4>counter No #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default counters;
