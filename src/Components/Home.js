import React, { useEffect } from 'react';
import Contact from './Contact';

import Footer from './Footer';
import Navbar from './Navbar';
import Profile from './Profile';


function Home() {
  useEffect(() => {
    window.scrollTo(0,0);
  })
  return (
    <>
      <Navbar />
      <Profile />
      <Contact />
      {/* <Footer /> */}
    </>
  )
}

export default Home;