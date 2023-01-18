import React from 'react'
import './App.css';
import Simpson from './components/simpson-base/simpson-base';

function App() {
  return (
      < Simpson image='https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'/>
  );
}

export default App;


// import { ImageBlock } from "./components/ImageBlock/ImageBlock";

// const App = () => {
//     const url = 'https://www.seekpng.com/png/detail/69-690313_bart-simpsons-png-bart-simpson-ass.png'
//     return (
//         <div className="App">
//             <div className="App">
//                 <ImageBlock url={url} bool={false}/>
//             </div>
//         </div>
//     );
// }