import { faAngleLeft, faAngleRight, faDatabase } from "@fortawesome/free-solid-svg-icons";

export const SKILLS = [{
    icons:[faAngleLeft, faAngleRight],
    name: 'Frontend Development',
    experience: 7,
    tech: [{
        name: 'JavaScript',
        rating: 8,
    }, {
        name: 'HTML',
        rating: 7,
    }, {
        name: 'CSS',
        rating: 7.5,
    }, {
        name: 'React',
        rating: 7.5,
    }]
}, {
    icons:[faDatabase],
    name: 'Backend Development',
    experience: 7,
    tech: [
        {
            name: 'NodeJS',
            rating: 7,
        },
        {
            name: 'PHP',
            rating: 5,
        },
        {
            name: 'MongoDB',
            rating: 7,
        },
        {
            name: 'Postgres/MySQL',
            rating: 7,
        },
    ]
}];