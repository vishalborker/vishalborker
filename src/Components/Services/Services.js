import React from 'react';

import { faAngleLeft, faAngleRight, faDatabase, faPenRuler, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../Common/Header';

import './Services.scss';

function Services() {
  const title = {
    title: 'Services'   ,
    subtitle: `What I can help with`,
  }

  return (
    <section className='services'>
        <article className='services-article'>
            <Header title={title.title} subtitle={title.subtitle} />
            <div className='services-data'>
                <ul>
                    <li>
                        <div><FontAwesomeIcon icon={faPenRuler} /></div>
                        <div>UI/UX</div>
                        <div>Designer</div>
                        <div>View More <FontAwesomeIcon icon={faRightLong} /></div>
                    </li>
                    <li>
                    <div><FontAwesomeIcon icon={faAngleLeft} /><FontAwesomeIcon icon={faAngleRight} /></div>
                        <div>Frontend</div>
                        <div>Developer</div>
                        <div>View More <FontAwesomeIcon icon={faRightLong} /></div>
                    </li>
                    <li>
                        <div><FontAwesomeIcon icon={faDatabase} /></div>
                        <div>Backend</div>
                        <div>Developer</div>
                        <div>View More <FontAwesomeIcon icon={faRightLong} /></div>
                    </li>
                </ul>
            </div>
        </article>
    </section>
  )
}

export default Services;