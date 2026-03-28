import React, { useState } from "react";
import SessionForm from "./components/SessionForm";
import Navbar from "./components/Navbar";
import SessionList from "./components/SessionList";

const App = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <Navbar setToggle={setToggle} />
      <div className="flex flex-wrap">
        {toggle ? <SessionList /> : <SessionForm setToggle={setToggle} />}
      </div>
    </div>
  );
};

export default App;
