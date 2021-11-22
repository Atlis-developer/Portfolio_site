import React, { useState } from "react";
import './Header.sass';

export const Header = () => {

  const [burger, setBurger] = useState(false)

  return (
    <div className="header">
      <div className='header-laptop'>
        <a href="#general">Главная</a>
        <a href="#about_me">О себе</a>
        <a href="#skills">Навыки</a>
        <a href="#portfolio">Портфолио</a>
        <a href="#contacts">Контакты</a>
      </div>
      <div className='header-mobile'>
        <div className="menu" onClick={()=>setBurger(!burger)}>
          <div className={burger ? 'hamburger-menu animate' : 'hamburger-menu'}></div>
        </div>
        {burger ? <div className='nav'>
          <a href="#general">Главная</a>
          <a href="#about_me">О себе</a>
          <a href="#skills">Навыки</a>
          <a href="#portfolio">Портфолио</a>
          <a href="#contacts">Контакты</a>
        </div> : null}
      </div>
    </div>
  );
}
