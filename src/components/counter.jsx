import React, { Component } from "react";
//<img src={this.state.imageUrl} />
/*<ul>
{this.state.tags.map(tag => (
  <li key={tag}>{tag}</li>
))}
</ul>*/
class Counter extends Component {
  state = {
    value: this.props.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };
  /*constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/

  render() {
    console.log(this.props.id);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.value === 0 ? "zero" : this.state.value;
  }
}

export default Counter;
