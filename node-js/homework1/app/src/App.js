import React from 'react'
import './App.css';
import Simpsons from "./components/Simpsons/Simpsons";

const App = () => {
  let task = (number) => React.createElement("div", {className: "task", id: `task${number}`, key: `task${number}`}, [<h1>Task {number}</h1>])

  return (
    
    [
      task(1),
      < Simpsons />
    ]
    
  );
}

export default App;
