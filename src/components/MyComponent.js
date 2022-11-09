import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "nguyen",
    address: "can tho",
    age: 12,
  };
  render() {
    return <div>i am {this.state.name}</div>;
  }
}
export default MyComponent;
//
