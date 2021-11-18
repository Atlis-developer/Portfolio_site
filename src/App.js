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
      <div className='about'>
        <Header />
        <GeneralInfo />
        <AboutMe />
      </div>
      <div className='portfolio'>
        <Skills />
        <Portfolio />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
