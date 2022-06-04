import './App.css';
import React, { useState } from 'react';

import Sidebar from './components/Sidebar';
// import Cv from './components/Cv';
// import Portfolio from './components/Portfolio';
// import Offer from './components/Offer';


function App() {
    const [path, setPath] = useState("");

    const handleClick = (changedPath) => {
      setPath(changedPath);
    };
  return (
    <div className="App">
      <Sidebar handleClick={handleClick} />
        {/* test main */}
        {/* {/* <Cv /> */}
        {path} 
        {/* <Offer/> */}
    </div>
  );
}

export default App;
