import React, { useState } from "react";
import './Contacts.sass';
import Phone from '../../images/phone.png';
import Telegram from '../../images/telegram.png';
import Gmail from '../../images/Gmail.png'

export const Contacts = () => {

  let [phone, setPhone] = useState(false);
  let [telegram, setTelegram] = useState(false);
  let [gmail, setGmail] = useState(false);

  return (
    <div id="contacts">
      <h3>
        Контакты
      </h3>
      <div className='all_contacts'>
        <div className='contact' onClick={()=>setPhone(!phone)}>
          <img src={Phone} alt='Phone'/>
          {phone && <a className='number' href='tel:+380506679887'>(050) 667 98 87</a>}
        </div>
        <div className='contact' onClick={()=>setTelegram(!telegram)}>
          <img src={Telegram} alt='Telegram'/>
          {telegram && <p>
            @At1is
          </p>}
        </div>
        <div className='contact' onClick={()=>setGmail(!gmail)}>
          <img src={Gmail} alt='Gmail'/>
          {gmail && <p>
            utts.kyiv@gmail.com
          </p>}
        </div>
      </div>
    </div>
  );
}
