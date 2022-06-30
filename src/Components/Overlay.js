import React from 'react';

function Overlay({ closeSidebar }) {
  return (
    <div className='overlay' onClick={() => closeSidebar()}></div>
  )
}

export default Overlay