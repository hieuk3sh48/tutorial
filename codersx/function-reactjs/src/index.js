import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

function App(){
  const users= [
    {
      name: "phong0908",
      avatarUrl:
        "https://cdn.glitch.com/aecd2dc9-8ef0-4e59-b56e-e65d6e268fc0%2FDSC08221%201.png?v=1592963949557"
    },
    {
      name: "phong0908",
      avatarUrl:
        "https://cdn.glitch.com/aecd2dc9-8ef0-4e59-b56e-e65d6e268fc0%2FDSC08221%201.png?v=1592963949557"
    },
    {
      name: "phong0908",
      avatarUrl:
        "https://cdn.glitch.com/aecd2dc9-8ef0-4e59-b56e-e65d6e268fc0%2FDSC08221%201.png?v=1592963949557"
    }
  ];
  const user={
    name: "Tân",
    avatarUrl:"https://cdn.glitch.com/aecd2dc9-8ef0-4e59-b56e-e65d6e268fc0%2FDSC_0167%201.png?v=1592963942610"
  }
  return (
    <div className='App'>
      <Header />
      <Body users={users} />
      <Footer user={user} />
    </div>
  )
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App/>,rootElement);
