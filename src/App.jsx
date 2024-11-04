import React from "react";
import "./App.css";
import GroceriesAppContainer from "./Components/GroceriesAppContainer";

function App() {
  return (
    <>
      {
        <div id="root">
          <GroceriesAppContainer />
        </div>
      }
    </>
  );
}

export default App;
