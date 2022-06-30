import React from 'react';
import ProgressBar from './ProgressBar';


function SpecialSkill({ name, rating }) {
  return (
    <div className='skills'>
        <div className='skill-name'>
            <h4>{name}</h4>
            <div className='rating'>{rating}/10</div>
        </div>
        <ProgressBar percentage={rating * 10} />
    </div>
  )
}

export default SpecialSkill;