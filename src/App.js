import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [content, setContent] = useState({
    title: "Space Ship",
    subHeading:
      "Translating Ideas to reality - #REACT #Javascript #CSS  #UX Design",
    service1: "North America & Europe",
    service2: "hanservices.com",
    service3: "Joined March 2009",
  });
  return (
    <div className="App">
      <Card
        title={content.title}
        subHeading={content.subHeading}
        service1={content.service1}
        service2={content.service2}
        service3={content.service3}
      />
    </div>
  );
}

export default App;
