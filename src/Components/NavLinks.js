import React, { useState } from 'react';

function NavLinks({ links, onNavigate }) {
 
  const [active, setActive] = useState(0);
  
  console.log({links});

  const handleActive = (link, index) => {
      setActive(index);
      onNavigate(link);
  }

  return (
    <div className='links'>
        <ul>
            {
                links.map((link, index) => (
                <li key={index} onClick={() => handleActive(link, index)} className={`${active === index ? 'active' : ''} `}>
                    <button>{link.title}</button>
                </li>
                ))
            }
        </ul>
    </div>
  )
}

export default NavLinks;