import React from 'react';
import Header from '../Common/Header';

import './Portfolio.scss';

function Portfolio() {
    const title = {
        title: 'Portfolio',
        subtitle: 'What I have worked on', 
      };
    
      return (
        <section className='portfolio'>
            <article className='portfolio-article'>
                <Header title={title.title} subtitle={title.subtitle} />
                <div className='portfolio-data'>
                    {/* <ContactDetails /> */}
                    {/* <ContactForm /> */}
                </div>
            </article>
        </section>
      )
}

export default Portfolio