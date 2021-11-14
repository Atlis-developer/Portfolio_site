import './App.sass';
import React from "react";
import { Header } from './components/Header/Header';
import { GeneralInfo } from './components/GeneralInfo/GeneralInfo';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Skills } from './components/Skills/Skills';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Contacts } from './components/Contacts/Contacts';


const App = () => {
  return (
    <div className="App">
      <Header/>
      <GeneralInfo/>
      <div className='about'>
        <AboutMe/>
      </div>
      <Skills/>
      <div className='portfolio'>
        <Portfolio/>
      </div>
      <Contacts/>
    </div>
  );
}

export default App;
