import React from "react";
import "../styles/app.css";
import NavBar from "./NavBar";
import { Rings } from "react-loading-icons";
import Cards from "./Cards";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <div className="loading">
        <Rings />
      </div> */}
      <Cards />
    </div>
  );
}

export default App;
