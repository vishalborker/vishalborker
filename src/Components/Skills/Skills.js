import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Header from '../Header';

import './Skills.scss';

function Skills() {
    const title = {
        title: 'Skills',
        subtitle: `What I'm good at`, 
    };
    
    return (
    <section className='skills'>
        <article className='skills-article'>
            <Header title={title.title} subtitle={title.subtitle} />
            <div className='carousel'>
                <div className='carousel-header'>
                    <div>
                        <FontAwesomeIcon icon={faAngleLeft} />
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>

                    <div className='skill-heading'>
                        <h4>Frontend Developer</h4>
                        <h6>More than 5 years</h6>
                    </div>
                    <div className='carousel-button'>
                        <FontAwesomeIcon icon={faAngleUp} />
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </div>

                <div className='carousel-body'>
                    <div className='skills'>
                        <h4>JavaScript</h4>
                        <div className='progress'>
                            <div className='progress-percentage'></div>
                        </div>
                    </div>

                    <div className='skills'>
                        <h4>HTML5</h4>
                        <div className='progress'>
                            <div className='progress-percentage'></div>
                        </div>
                    </div>

                    <div className='skills'>
                        <h4>CSS3</h4>
                        <div className='progress'>
                            <div className='progress-percentage'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='carousel'>
                <div className='carousel-header'>
                    <div>
                        <FontAwesomeIcon icon={faDatabase} />
                    </div>

                    <div className='skill-heading'>
                        <h4>Backend Developer</h4>
                        <h6>More than 6 years</h6>
                    </div>
                    <div className='carousel-button'>
                        <FontAwesomeIcon icon={faAngleUp} />
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </div>
            </div>
        </article>
    </section>
    )
}

export default Skills