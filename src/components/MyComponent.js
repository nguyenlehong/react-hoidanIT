import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

class MyComponent extends React.Component {
  Adduser = (user) => {
    console.log("check: ", user);
    this.setState({
      listuser: [user, ...this.state.listuser],
    });
  };

  state = {
    listuser: [
      { id: "1", name: "mot", age: "13" },

      { id: "2", name: "hai", age: "30" },

      { id: "3", name: "ba", age: "63" },
    ],
  };
  handlDelete = (userId) => {
    let listUserClone = this.state.listuser;
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    this.setState({
      listuser: listUserClone,
    });
  };
  render() {
    return (
      <div>
        <AddUserInfo Adduser={this.Adduser} />
        <DisplayInfo
          listUser={this.state.listuser}
          handlDelete={this.handlDelete}
        ></DisplayInfo>
      </div>
    );
  }
}
export default MyComponent;
//
