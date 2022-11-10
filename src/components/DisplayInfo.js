import React from "react";
class DisplayInfo extends React.Component {
  render() {
    const { listUser } = this.props;
    console.log(listUser);
    return (
      <div>
        <div>
          {listUser.map((user) => {
            return (
              <div key={user.id}>
                <h3>my name: {user.name}</h3>

                <h3>my age: {user.age}</h3>

                <h3>my id: {user.id}</h3>
                <hr></hr>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default DisplayInfo;
