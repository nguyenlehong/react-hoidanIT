import React, { useEffect, useState } from "react";
// class AddUserInfo extends React.Component {
//   state = {
//     name: "nguyen",
//     address: "can tho",
//     age: 12,
//   };
//   Clickme = () => {
//     console.log(this.state.name);
//     this.setState({
//       name: "nguyen",
//     });
//     this.setState({
//       age: Math.floor(Math.random() * 100 + 1),
//     });
//   };
//   onchangInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };
//   onchangage = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   onSubmit = (event) => {
//     event.preventDefault();
//     this.props.Adduser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };

//   render() {
//     return (
//       <div>
//         i am {this.state.name} and age: {this.state.age}
//         {/* <button onClick={this.Clickme}>click me</button> */}
//         <button
//           onClick={() => {
//             this.Clickme();
//           }}
//         >
//           {" "}
//           click
//         </button>
//         <form onSubmit={(event) => this.onSubmit(event)}>
//           <label>name</label>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={(event) => this.onchangInput(event)}
//           ></input>
//           <label>age</label>
//           <input
//             type="number"
//             value={this.state.age}
//             onChange={(event) => this.onchangage(event)}
//           ></input>
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
const AddUserInfo = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const Clickme = () => {
    console.log(this.state.name);
    this.setState({
      name: "nguyen",
    });
    this.setState({
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  const onchangInput = (event) => {
    setName(event.target.value);
  };

  const onchangage = (event) => {
    setAge(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.Adduser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };
  useEffect(() => {
    setTimeout(() => {
      document.title = "a;sdljfa";
    }, 3000);
    console.log(">>> useeffect");
  }, []);
  return (
    <div>
      i am {name} and age: {age}
      {/* <button onClick={this.Clickme}>click me</button> */}
      <button
        onClick={() => {
          this.Clickme();
        }}
      >
        {" "}
        click
      </button>
      <form onSubmit={(event) => onSubmit(event)}>
        <label>name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => onchangInput(event)}
        ></input>
        <label>age</label>
        <input
          type="number"
          value={age}
          onChange={(event) => onchangage(event)}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfo;
