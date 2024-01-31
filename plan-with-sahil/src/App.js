import './App.css';
import React, { useState } from 'react';
import Tours from './Components/Tours';
import citiesData from './citiesData';


function App() {
  const [tours, setTours]= useState(citiesData);

  return (
    <>
    <Tours tours={tours}> </Tours>
    </>
  );
}

export default App;
