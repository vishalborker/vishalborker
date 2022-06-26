import React from 'react';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactDetails() {
  return (
    <article className='contact-details'>
        <div className='callme'>
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            <div className='phone-no'>
                <span>Call Me</span>
                <span>999-777-888</span>
            </div>
        </div>
        <div className='email'>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            <div className='email-address'>
                <span>Email</span>
                <span>abc@xyz.com</span>
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