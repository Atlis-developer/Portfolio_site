import React from "react";
import './Portfolio.sass';
import BestBox_WP from '../../images/BestBox_WP.png'
import BestBox_React from '../../images/BestBox_React.png'
import StarWars from '../../images/StarWars.png'
import Snakes from '../../images/Snakes.png'
import Sea_battle from '../../images/Sea_battle.png'
import Social_network from '../../images/social_network.png'
import Currenty_Exchange from '../../images/currency_exchange.png'

export const Portfolio = () => {
  const examples =[
    {image: <img src={BestBox_WP} alt='BestBox_WP'/>, link: <a href='http://bestbox.kiev.ua'>Сайт по продаже металлической мебели, созданый с помощью WordPress</a>, id:1},

    {image: <img src={Social_network} alt='Social_network'/>, link: <a href='https://github.com/Atlis-developer/-social-network'>Прототип социальной сети, созданый с помощью ReactJS</a>, id:2},

    {image: <img src={BestBox_React} alt='BestBox_React'/>, link: <a href='https://github.com/Atlis-developer/BestBox'>Сайт по продаже металлической мебели, созданый с помощью ReactJS</a>, id:3},

    {image: <img src={StarWars} alt='StarWars'/>, link: <a href='https://github.com/Atlis-developer/Star-Wars'>Сайт по мотивам киновселенной StarWars, созданый с помощью ReactJS</a>, id:4},

    {image: <img src={Currenty_Exchange} alt='Currenty_Exchange'/>, link: <a href='https://github.com/Atlis-developer/currency_exchange'>Сайт для мониторинга курса валют, созданый с помощью ReactJS</a>, id:5},

    {image: <img src={Snakes} alt='Snakes'/>, link: <a href='https://atlis-developer.github.io/Snakes/'>Классическая игра "Змейка"</a>, id:6},

    {image: <img src={Sea_battle} alt='Sea_battle'/>, link: <a href='https://atlis-developer.github.io/sea-battle/'>Классическая игра "Морской бой"</a>, id:7}
  ]
  return (
    <div id="portfolio">
      <h3>
        Портфолио
      </h3>
      {examples.map(e=>
        <div className='examples_container' key={e.id}>
          {e.image}
          <div>
            {e.link}
          </div>
        </div>
      )}
    </div>
  );
}
