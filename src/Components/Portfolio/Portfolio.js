import React, { useState } from 'react';
import Header from '../Common/Header';

import './Portfolio.scss';

import linkedin from '../../images/linkedin-clone2.PNG';
import countrySearch from '../../images/country-search-ui.PNG';
import pokedex from '../../images/Pokedex.PNG';
import shoeStore from '../../images/shoe-store.PNG';
import clockUi from '../../images/clock-ui.PNG';
import timeTrackerUI from '../../images/time-tracker-dashboard.PNG';
import hoverEffect from '../../images/hover-effect.PNG';



import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Portfolio() {

    const [ current, setCurrent ] = useState(0);
    const title = {
        title: 'Projects',
        subtitle: 'What I have worked on', 
    };

    const data = [{
        link: 'https://linkedin-clone-ui-react.web.app/login',
        image: linkedin,
        details: 'Linkedin Clone App - React, HTML5, CSS3, Redux-saga, Responsive',
    }, {
        link: 'https://country-search-ui.web.app/',
        image: countrySearch,
        details: 'Country Search UI - React, HTML5, CSS3, Responsive',
    }, {
        link: 'https://pokedex-react-ui.web.app/',
        image: pokedex,
        details: 'Pokedex - React, HTML5, CSS3, Responsive',
    }, {
        link: 'https://shoe-fy1.web.app/',
        image: shoeStore,
        details: 'Shoe Store - HTML5, CSS3, Responsive',
    }, {
        link:'https://clock-design-ui.web.app/',
        image: clockUi,
        details: 'Clock UI - HTML5, CSS3, Responsive',
    }, {
        link: 'https://time-tracker-design.web.app/',
        image: timeTrackerUI,
        details: 'Time Tracker UI - HTML5, CSS3, Responsive',
    }, {
        link: 'https://hover-effect-ui.web.app/',
        image: hoverEffect,
        details: 'Hover Effect UI - HTML5 canvas, Responsive',
    }
];

    const previous = () => {
        if (current === 0) {
            setCurrent(data.length - 1);
        } else {
            setCurrent(current => current - 1);
        }
    }

    const next = () => {
        console.log({current}, {length: data.length});
        if (current > data.length - 2) {
            setCurrent(0);
        } else {
            setCurrent(current => current + 1);
        }
    }
    
    return (
      <section className='portfolio'>
        <article className='portfolio-article'>
            <Header title={title.title} subtitle={title.subtitle} />
            <div className='portfolio-data'>
                <ul className='portfolio-list'>
                {
                    data.slice(current, current + 1).map((item, index) => {
                        return (
                            <>
                                <li className='portfolio-item' key={index}>
                                    <a href={item.link} target='_blank' rel='noopener noreferrer'>
                                        <img src={item.image} alt={item.details} />
                                    </a>
                                </li>
                                <div className='portfolio-details'>
                                    <p>{item.details}</p>
                                    <a href={item.link} target='_blank' rel='noopener noreferrer' className='demo'>Demo Link</a>
                                </div>
                            </>
                        )
                    })
                }
                </ul>

                <div className='pager-buttons'>
                    <button onClick={ () => previous() }>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <button onClick={ () => next() }>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>
            </div>
        </article>
      </section>
    )
}

export default Portfolio