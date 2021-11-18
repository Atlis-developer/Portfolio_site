import React from "react";
import './Header.sass';

export const Header = () => {
    return (
      <div className="header">
        <a href="#general">Главная</a>
        <a href="#about_me">О себе</a>
        <a href="#skills">Навыки</a>
        <a href="#portfolio">Портфолио</a>
        <a href="#contacts">Контакты</a>
      </div>
    );
  }
