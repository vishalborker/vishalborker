import React, { useState } from 'react';

import {
  faAngleDown, 
  faAngleUp, 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SpecialSkill from './SpecialSkill';

function SkillSet({ skill }) {
  const [open, setOpen] = useState(true);
  const { tech, name, experience, icons } = skill;

  return (
    <div className='carousel'>
        <div className='carousel-header' onClick={() => setOpen(currOpen => !currOpen)}>
            <div className='icon-and-heading'>
                <div className='skill-icon'>
                    {
                      icons && icons.map((icon, index) => <FontAwesomeIcon icon={icon} key={index} />)
                    }                    
                </div>
                <div className='skill-heading'>
                    <h4>{name}</h4>
                    <h6>More than {experience} years</h6>
                </div>
            </div>
            <div className='carousel-button' >
                <FontAwesomeIcon icon={open ? faAngleUp : faAngleDown } />
            </div>
        </div>

        {
            open ? 
            (
                <div className='carousel-body'>
                  {
                    tech.map((skill, index) => <SpecialSkill key={index} name={skill.name} rating={skill.rating}/>)
                  }
                </div>
            )
            : null
        }
    </div>
  )
}

export default SkillSet;