import React from 'react'
import './App.css';
import Simpsons from "./components/Simpsons/Simpsons";
import Character from "./components/Character/Character";

const App = () => {
    let task = (number) => React.createElement("div",
        {className: "task", id: `task${number}`, key: `task${number}`},
        [<h1 key={Math.floor(Math.random() * 100)}>Task {number}</h1>])

    return (
    <>
        {task(1)}
        <Simpsons/>
        {task(2)}
        <Character/>
    </>
    )
}

export default App;