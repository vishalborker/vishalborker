import React from 'react'
import NavLinks from './NavLinks';

function Sidebar({ links, onNavigate }) {
  return (
    <NavLinks links={links} onNavigate={onNavigate}/>
  )
}

export default Sidebar;