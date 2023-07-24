import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header bg-yellow-300">
        <div>
          <p>Quacky Coders</p>
          <h1>Revolutionize your debugging with monthly rubber ducks!</h1>

          <div className="action-btns">
            <button>Get Started</button>
            <button>Learn More</button>
          </div>
        </div>
        <img
          width={600}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd2%2F16%2Feb%2Fd216eba9ad0abca8ecd567e2ed49f9a4.jpg&f=1&nofb=1&ipt=47acee959a7b38139fff346ad31cf7d609e668b5dd861a4ebdd07d528fa3cb2d&ipo=images"
          alt="rubber duck decoding"
        />
      </header>
    </div>
  );
}

export default App;
