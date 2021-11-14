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
    {name: 'HTML', image:<img src={LogoHTML} />, stars: 5},
    {name: 'CSS', image:<img src={LogoCSS} />, stars: 4},
    {name: 'JavaScript', image:<img src={LogoJS} />, stars: 3},
    {name: 'ReactJS', image:<img src={LogoReact} />, stars: 3},
    {name: 'Redux', image:<img src={LogoRedux} />, stars: 4},
    {name: 'React-Redux', image:<img src={LogoReactRedux} />, stars: 4},
    {name: 'Redux Thunk', image:<img src={LogoReduxThunk} />, stars: 3},
    {name: 'React Router', image:<img src={LogoReactRouter} />, stars: 4},
    {name: 'Axios', image:<img src={LogoAxios} />, stars: 3},
    {name: 'Canvas', image:<img src={Canvas} />, stars: 2},
    {name: 'Figma', image:<img src={LogoFigma} />, stars: 3},
    {name: 'Git', image:<img src={LogoGit} />, stars: 3},
  ]

  return (
    <div id='skills'>
      <h2>
        Skills
      </h2>
      <p>
        I work in such programs as
      </p>
      <div className='all-skills'>
      {skills.map(skill =>
        <div className='skill'>
          {skill.image}
          <div className='name'>
          {skill.name}
          </div>
          <div className='star'>
            {skill.stars >= 1 ? 
            <span>&#9733;</span> : 
            <span>&#10032;</span>}
            {skill.stars >= 2 ? 
            <span>&#9733;</span> : 
            <span>&#10032;</span>}
            {skill.stars >= 3 ? 
            <span>&#9733;</span> : 
            <span>&#10032;</span>}
            {skill.stars >= 4 ? 
            <span>&#9733;</span> : 
            <span>&#10032;</span>}
            {skill.stars == 5 ? 
            <span>&#9733;</span> : 
            <span>&#10032;</span>}
          </div>
        </div>)}
      </div>
    </div>

  );
}
