import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {
  render() {
    const num = ["1", "2", "2"];
    return (
      <div>
        <UserInfo />
        <DisplayInfo name="nguyenn" age="12"></DisplayInfo>

        <DisplayInfo name="nguyensn" age="1s2" num={num}></DisplayInfo>
      </div>
    );
  }
}
export default MyComponent;
//
