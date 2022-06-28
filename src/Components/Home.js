import React, { useEffect } from 'react';
import Contact from './Contact/Contact';

import Footer from './Footer';
import Navbar from './Navbar';
import Profile from './Profile';
import Services from './Services/Services';


function Home() {
  useEffect(() => {
    window.scrollTo(0,0);
  })
  return (
    <>
      <Navbar />
      <Profile />
      <Services />
      <Contact />
      {/* <Footer /> */}
    </>
  )
}

export default Home;