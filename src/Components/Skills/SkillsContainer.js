import React from 'react';

import Header from '../Common/Header';
import SkillSet from './SkillSet';

import { SKILLS } from '../../Constants/Skills';
import './Skills.scss';

function SkillsContainer() {
    const title = {
        title: 'Skills',
        subtitle: `What I'm good at`, 
    };

    const skills = SKILLS;
    
    return (
        <section className='skills'>
            <article className='skills-article'>
                <Header title={title.title} subtitle={title.subtitle} />
                <div className='carousel-container'>
                  {
                      skills.map((skill, index) => {
                        return (
                            <SkillSet skill={skill} key={index} />
                        )
                      })
                  }
                </div>
            </article>
        </section>
    )
}

export default SkillsContainer;