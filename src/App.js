import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./components/MyComponent";
import React from "react";
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>number: {Math.random()}</h1>
        <MyComponent></MyComponent>
      </div>
    );
  }
}
function App2() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>hello world</h1>
      <MyComponent></MyComponent>
    </div>
  );
}

export default App;
