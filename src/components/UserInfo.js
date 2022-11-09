import React from "react";
class UserInfo extends React.Component {
  state = {
    name: "nguyen",
    address: "can tho",
    age: 12,
  };
  Clickme = () => {
    console.log(this.state.name);
    this.setState({
      name: "nguiyeneksejdhflkah",
    });
    this.setState({
      age: Math.floor(Math.random() * 100 + 1),
    });
  };
  onchangInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  onchangage = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        i am {this.state.name} and age: {this.state.age}
        {/* <button onClick={this.Clickme}>click me</button> */}
        <button
          onClick={() => {
            this.Clickme();
          }}
        >
          {" "}
          click
        </button>
        <form onSubmit={(event) => this.onSubmit(event)}>
          <label>name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.onchangInput(event)}
          ></input>
          <label>age</label>
          <input
            type="number"
            value={this.state.age}
            onChange={(event) => this.onchangage(event)}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default UserInfo;
