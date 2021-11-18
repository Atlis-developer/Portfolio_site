import React from "react";
import './GeneralInfo.sass';
import Ava from '../../images/ava.JPG'

export const GeneralInfo = () => {
  return (
    <div id="general">
      <div className='info'>
        <div className='name'>
          Владимир <br/> Климин
        </div>
        <div className='profession'>
        Junior React Frontend Developer <br/>
        30 лет, город Киев
        </div>
      </div>
      <div className='image'>
        <img src={Ava} alt='avatar'/>
      </div>
    </div>
  );
}
