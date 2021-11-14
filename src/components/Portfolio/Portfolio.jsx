import React from "react";
import './Portfolio.sass';
import BestBox_WP from '../../images/BestBox_WP.png'
import BestBox_React from '../../images/BestBox_React.png'
import StarWars from '../../images/StarWars.png'
import Snakes from '../../images/Snakes.png'
import Sea_battle from '../../images/Sea_battle.png'
import Social_network from '../../images/social_network.png'

export const Portfolio = () => {
  const examples =[
    {image: <img src={BestBox_WP}/>, link: <a href='http://bestbox.kiev.ua'>Сайт по продаже металлической мебели, созданый с помощью WordPress</a>},

    {image: <img src={Social_network}/>, link: <a href='https://github.com/Atlis-developer/-social-network'>Прототип социальной сети, созданый с помощью ReactJS</a>},

    {image: <img src={BestBox_React}/>, link: <a href='https://github.com/Atlis-developer/BestBox'>Сайт по продаже металлической мебели, созданый с помощью ReactJS</a>},

    {image: <img src={StarWars}/>, link: <a href='https://github.com/Atlis-developer/Star-Wars'>Сайт по мотивам киновселенной StarWars, созданый с помощью ReactJS</a>},

    {image: <img src={Snakes}/>, link: <a href='https://atlis-developer.github.io/Snakes/'>Классическая игра "Змейка"</a>},

    {image: <img src={Sea_battle}/>, link: <a href='https://atlis-developer.github.io/sea-battle/'>Классическая игра "Морской бой"</a>}
  ]
  return (
    <div id="portfolio">
      <h3>
        Portfolio
      </h3>
      {examples.map(e=>
        <div className='examples_container'>
          {e.image}
          <div>
            {e.link}
          </div>
        </div>
      )}
    </div>
  );
}
