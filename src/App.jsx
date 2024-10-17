// App.js
import React from "react";
import SectionToObserve from "./components/SectionToObserve";

const App = () => {
  return (
    <div>
      <div style={{ height: "100vh", padding: "20px", backgroundColor: "lightgray" }}>
        <h1>Scroll down to see the magic!</h1>
      </div>
      
      <SectionToObserve />
      
      <div style={{ height: "100vh", padding: "20px", backgroundColor: "lightgreen" }}>
        <h1>This is the section after the observed section.</h1>
      </div>
    </div>
  );
};

export default App;
