import React from 'react';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ContactDetails.scss';

function ContactDetails() {
  return (
    <article className='contact-details'>
        <div className='callme'>
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            <div className='phone-no'>
                <span>Call Me</span>
                <span>820-857-7522</span>
            </div>
        </div>
        <div className='email'>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            <div className='email-address'>
                <span>Email</span>
                <span>borkervishal@gmail.com</span>
            </div>
        </div>
        <div className='location'>
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <div className='location-address'>
                <span>Location</span>
                <span>Goa</span>
            </div>
        </div>
    </article>
  )
}

export default ContactDetails;