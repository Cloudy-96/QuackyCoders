import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header bg-primary h-96 flex items-center justify-center text-left">
        <div className="w-96">
          <p className="font-bold align-text-top my-6">Quacky Coders</p>
          <h1 className="text-4xl my-6 ">
            Revolutionize your debugging with monthly rubber ducks!
          </h1>

          <div className="action-btns btn flex gap-2">
            <button className="btn text-darkBlue bg-white">Get Started</button>
            <button className="btn bg-lightBlue text-white">Learn More</button>
          </div>
        </div>
        <img
          className="h-48 rounded-sm drop-shadow-lg"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd2%2F16%2Feb%2Fd216eba9ad0abca8ecd567e2ed49f9a4.jpg&f=1&nofb=1&ipt=47acee959a7b38139fff346ad31cf7d609e668b5dd861a4ebdd07d528fa3cb2d&ipo=images"
          alt="rubber duck decoding"
        />
      </header>
    </div>
  );
}

export default App;
