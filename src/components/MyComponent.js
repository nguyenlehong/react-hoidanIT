import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {
  state = {
    listuser: [
      { id: "1", name: "mot", age: "31" },

      { id: "2", name: "hai", age: "32" },

      { id: "3", name: "ba", age: "33" },
    ],
  };
  render() {
    return (
      <div>
        <UserInfo />
        <DisplayInfo listUser={this.state.listuser}></DisplayInfo>
      </div>
    );
  }
}
export default MyComponent;
//
