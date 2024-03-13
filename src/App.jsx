import { useState } from "react";
import "./App.css";
import Dropdown from "./Components/Dropdown/Dropdown";
import BobsDropdown from "./Components/BobsDropdown/BobsDropdown";
import BobsInfoBox from "./Components/BobsInfoBox/BobsInfoBox";

function App() {
  return (
    <>
      <h1>Builder Bob</h1>
      <BobsDropdown />

      {/* <h1>Premier League Clubs</h1> */}
      {/* <Dropdown /> */}
    </>
  );
}

export default App;
