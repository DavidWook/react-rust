import React ,{useState, useEffect} from 'react';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import Detail from './Detail';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/info/:name" element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
