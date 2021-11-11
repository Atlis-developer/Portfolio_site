import './App.sass';
import React from "react";
import { Header } from './components/Header/Header';
import { GeneralInfo } from './components/GeneralInfo/GeneralInfo';
import { AboutMe } from './components/AboutMe/AboutMe';


const App = () => {
  return (
    <div className="App">
      <Header/>
      <GeneralInfo/>
      <div className='about'>
        <AboutMe/>
      </div>
    </div>
  );
}

export default App;
