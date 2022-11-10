import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {
  state = {
    listuser: [
      { id: "1", name: "mot", age: "13" },

      { id: "2", name: "hai", age: "30" },

      { id: "3", name: "ba", age: "63" },
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
