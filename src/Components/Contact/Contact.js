import React from 'react';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import Header from '../Header';

import './Contact.scss';

function Contact() {
  
  const title = {
    title: 'Contact Me',
    subtitle: 'Get in touch', 
  };

  return (
    <section className='contact'>
        <article className='contact-article'>
            <Header title={title.title} subtitle={title.subtitle} />
            <div className='contact-data'>
                <ContactDetails />
                <ContactForm />
            </div>
        </article>
    </section>
  )
}

export default Contact