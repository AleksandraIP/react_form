import React from "react";
import './App.css';
import Info from "./done/aboutme";
import Towns from "./done/towns";

function App() {
  return (
      <div className="App">
        {/*<Info name="Oleksandra Popova" age="29" tel="079 111 11 11" email="aleksandraip@ukr.net" nationality="Ukrainian"></Info>*/}
          <Towns></Towns>
      </div>

  );
}

export default App;
