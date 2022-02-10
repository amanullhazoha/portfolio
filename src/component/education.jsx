import { Row } from 'react-bootstrap';
import MyDgree from './myDgree';
import SectionHead from './sectionHead';

const education = [
    {
        id: 344,
        date: '2020 - PRESENT',
        subject: 'WEB DEVELOPER',
        institute: 'Pondit',
        discription:
            'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
        iconClass: 'fa-suitcase',
    },

    {
        id: 3444,
        date: '2018 - PRESENT',
        subject: 'DIPLOMA IN EMT',
        institute: 'RPI',
        discription:
            'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
        iconClass: 'fa-book-open',
    },
];

const Education = () => (
    <>
        <SectionHead heading="EXPERIENCE & EDUCATION" />

        <Row>
            {education.map((edu) => (
                <MyDgree education={edu} />
            ))}
        </Row>
    </>
);

export default Education;
