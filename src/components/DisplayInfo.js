import React from "react";
class DisplayInfo extends React.Component {
  state = {
    show: true,
  };
  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  handleShowon = () => {
    this.setState({
      show: true,
    });
  };
  render() {
    const { listUser } = this.props;
    console.log(listUser);
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleShow();
            }}
          >
            {" "}
            {this.state.show === true ? "hide" : "show"}
          </span>
          <span
            onClick={() => {
              this.handleShowon();
            }}
          >
            {" "}
            On
          </span>
        </div>
        {this.state.show && (
          <div>
            {listUser.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "blue" : "red"}>
                  <h3>my name: {user.name}</h3>
                  <h3>my age: {user.age}</h3>
                  <h3>my id: {user.id}</h3>
                  <hr></hr>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default DisplayInfo;
// if (+user.age > 28) {
//   return (
//     <div key={user.id} className="red">
//       <h3>my name: {user.name}</h3>

//       <h3>my age: {user.age}</h3>

//       <h3>my id: {user.id}</h3>
//       <hr></hr>
//     </div>
//   );
// } else {
//   return (
//     <div key={user.id} className="blue">
//       <h3>my name: {user.name}</h3>

//       <h3>my age: {user.age}</h3>

//       <h3>my id: {user.id}</h3>
//       <hr></hr>
//     </div>
//   );
// }
