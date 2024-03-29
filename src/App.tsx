import React from "react";
import "./App.css";

import About from "./components/About.jsx";
import Subcription from "./components/Subscription";
import DuckBenefits from "./components/DuckBenefits";
import FAQs from "./components/FAQs";
import Story from "./components/Story";
import Newsletter from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <nav>
        <ul className="flex w-[100%] gap-6 p-3 *:text-[20px]">
          <li>About Us</li>
          <li>Subscriptions</li>
          <li>FAQ</li>
          <li>contact us</li>
        </ul>
      </nav>
      <header className="App-header bg-primary flex items-center pt-0 pb-[34px] lg:h-[80vh]">
        <div className="grid lg:flex justify-center items-center gap-12 lg:max-w-[1310px] m-auto py-[16px]">
          <div className="px-[16px] lg:w-[50%]">
            <p className="font-bold align-text-top my-6 text-xl">
              Quacky Coders
            </p>
            <h1 className="text-3xl lg:text-5xl my-6 ">
              Revolutionize your debugging with monthly rubber ducks!
            </h1>

            <div className="action-btns btn flex gap-2">
              <button className="btn text-darkBlue bg-white">
                Get Started
              </button>
              <button className="btn bg-lightBlue text-white">
                Learn More
              </button>
            </div>
          </div>
          <img
            className="w-[90%] m-auto mt-2 lg:h-[351px] rounded-lg drop-shadow-lg contain"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd2%2F16%2Feb%2Fd216eba9ad0abca8ecd567e2ed49f9a4.jpg&f=1&nofb=1&ipt=47acee959a7b38139fff346ad31cf7d609e668b5dd861a4ebdd07d528fa3cb2d&ipo=images"
            alt="rubber duck decoding"
          />
        </div>
      </header>

      <About />
      <DuckBenefits />
      <Subcription />
      <FAQs />
      <Story />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
