import React, { useState } from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

// class MyComponent extends React.Component {
//   Adduser = (user) => {
//     console.log("check: ", user);
//     this.setState({
//       listuser: [user, ...this.state.listuser],
//     });
//   };

//   state = {
//     listuser: [
//       { id: "1", name: "mot", age: "13" },

//       { id: "2", name: "hai", age: "30" },

//       { id: "3", name: "ba", age: "63" },
//     ],
//   };
//   handlDelete = (userId) => {
//     let listUserClone = this.state.listuser;
//     listUserClone = listUserClone.filter((item) => item.id !== userId);
//     this.setState({
//       listuser: listUserClone,
//     });
//   };
//   render() {

//     Adduser = (user) => {
//       console.log("check: ", user);
//       this.setState({
//         listuser: [user, ...this.state.listuser],
//       });
//     };

//     state = {
//       listuser: [
//         { id: "1", name: "mot", age: "13" },

//         { id: "2", name: "hai", age: "30" },

//         { id: "3", name: "ba", age: "63" },
//       ],
//     };
//     handlDelete = (userId) => {
//       let listUserClone = this.state.listuser;
//       listUserClone = listUserClone.filter((item) => item.id !== userId);
//       this.setState({
//         listuser: listUserClone,
//       });
//     };

//     return (
//       <div>
//         <AddUserInfo Adduser={this.Adduser} />
//         <DisplayInfo
//           listUser={this.state.listuser}
//           handlDelete={this.handlDelete}
//         ></DisplayInfo>
//       </div>
//     );
//   }
// }
const MyComponent = (props) => {
  const [listuser, setlistuser] = useState([
    { id: "1", name: "mot", age: "13" },
    { id: "2", name: "hai", age: "30" },
    { id: "3", name: "ba", age: "63" },
  ]);
  const Adduser = (user) => {
    setlistuser([user, ...listuser]);
  };
  const handlDelete = (userId) => {
    let listUserClone = listuser;
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setlistuser(listUserClone);
  };

  return (
    <div>
      <AddUserInfo Adduser={Adduser} />
      <DisplayInfo listUser={listuser} handlDelete={handlDelete}></DisplayInfo>
    </div>
  );
};
export default MyComponent;
//
