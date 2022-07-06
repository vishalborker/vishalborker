import React, { useEffect } from 'react';
import Contact from './Contact/Contact';

import Footer from './Common/Footer';
import Navbar from './Common/Navbar';
import Services from './Services/Services';
import SkillsContainer from './Skills/SkillsContainer';
import Profile from './Profile/Profile';
import Portfolio from './Portfolio/Portfolio';


function Home() {
  useEffect(() => {
    window.scrollTo(0,0);
  });
  return (
    <>
      <Navbar />
      <Profile />
      <Services />
      <SkillsContainer />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;