import React from "react";
import { Content } from "./Content";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div className="App">
      
      <Navbar route="/" path="/" />
      <Content/>

    </div>
  );
}

export default App;
