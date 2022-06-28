import React from 'react';

import profileImg from '../images/profile-pic.png';

import './Intro.scss';
import Profession from './Profession';
import Social from './Social';


function Intro() {
  const name = "Vishal";
  return (
    <article className='intro'>
        <div className='personal'>
            <div className='details'>
              <p>Hi,</p>
              <p>I'm&nbsp;
                  <b>
                      {
                          name.split('').map((letter, index) => <span data-animation-time={`${2000 + (index*200)}ms`} key={index}>{letter}</span>)
                      }
                  </b>
              </p>
              <p className='profession'>I'm a&nbsp;
                  <Profession />
              </p>
              
              <div className='social'>
                <Social /> 
              </div>

            </div>
            <div className='photo'>
            <img src={profileImg} alt='profile'/>
            </div>
        </div>
    </article>
  )
}

export default Intro