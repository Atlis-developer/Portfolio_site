import React from "react";
import './Header.sass';

export const Header = () => {
    return (
      <div className="header">
        <a href="#general">Home</a>
        <a href="#about_me">About me</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contacts">Contacts</a>
      </div>
    );
  }
