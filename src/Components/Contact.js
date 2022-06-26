import React from 'react';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

import './Contact.scss';

function Contact() {
  return (
    <section className='contact'>
        <article className='contact-article'>
            <div className='header'>
                <h5>Contact Me</h5>
                <h6>Get in Touch</h6>
            </div>
            <div className='contact-data'>
                <ContactDetails />
                <ContactForm />
            </div>
        </article>
    </section>
  )
}

export default Contact