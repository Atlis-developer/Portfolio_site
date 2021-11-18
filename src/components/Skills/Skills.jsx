import React from "react";
import './Skills.sass';
import LogoHTML from '../../images/html.png'
import LogoCSS from '../../images/css.png'
import LogoJS from '../../images/javascript.png'
import LogoReact from '../../images/react.png'
import LogoRedux from '../../images/redux.png'
import LogoReactRedux from '../../images/react-redux.png'
import LogoReduxThunk from '../../images/redux-thunk-small.png'
import LogoReactRouter from '../../images/react-router.png'
import LogoFigma from '../../images/figma.png'
import LogoAxios from '../../images/axios.png'
import LogoGit from '../../images/git.png'
import Canvas from '../../images/canvas.png'


export const Skills = () => {

  let skills = [
    { name: 'HTML', image: <img src={LogoHTML} alt='LogoHTML'/>, stars: 5, id:1 },
    { name: 'CSS', image: <img src={LogoCSS} alt='LogoCSS'/>, stars: 4, id:2 },
    { name: 'JavaScript', image: <img src={LogoJS} alt='LogoJS'/>, stars: 4, id:3 },
    { name: 'ReactJS', image: <img src={LogoReact} alt='LogoReact'/>, stars: 4, id:4 },
    { name: 'Redux', image: <img src={LogoRedux} alt='LogoRedux'/>, stars: 4, id:5 },
    { name: 'React-Redux', image: <img src={LogoReactRedux} alt='LogoReactRedux'/>, stars: 4, id:6 },
    { name: 'Redux Thunk', image: <img src={LogoReduxThunk} alt='LogoReduxThunk'/>, stars: 3, id:7 },
    { name: 'React Router', image: <img src={LogoReactRouter} alt='LogoReactRouter'/>, stars: 4, id:8 },
    { name: 'Axios', image: <img src={LogoAxios} alt='LogoAxios'/>, stars: 4, id:9 },
    { name: 'Canvas', image: <img src={Canvas} alt='Canvas'/>, stars: 2, id:10 },
    { name: 'Figma', image: <img src={LogoFigma} alt='LogoFigma'/>, stars: 3, id:11 },
    { name: 'Git', image: <img src={LogoGit} alt='LogoGit'/>, stars: 3, id:12 },
  ]

  return (
    <div id='skills'>
      <h2>
        Навыки
      </h2>
      <p>
        Я работаю в таких программах как:
      </p>
      <div className='all-skills'>
        {skills.map(skill =>
          <div className='skill' key={skill.id}>
            {skill.image}
            <div className='name'>
              {skill.name}
            </div>
            <div className='star'>
              {skill.stars >= 1 ?
                <span className='full'>&#9733;</span> :
                <span className='empty'>&#10032;</span>}
              {skill.stars >= 2 ?
                <span className='full'>&#9733;</span> :
                <span className='empty'>&#10032;</span>}
              {skill.stars >= 3 ?
                <span className='full'>&#9733;</span> :
                <span className='empty'>&#10032;</span>}
              {skill.stars >= 4 ?
                <span className='full'>&#9733;</span> :
                <span className='empty'>&#10032;</span>}
              {skill.stars === 5 ?
                <span className='full'>&#9733;</span> :
                <span className='empty'>&#10032;</span>}
            </div>
          </div>)}
      </div>
    </div>

  );
}
