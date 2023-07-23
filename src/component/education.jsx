import { Row } from 'react-bootstrap';
import MyDgree from './myDgree';
import SectionHead from './sectionHead';

const education = [
    {
        id: 201,
        date: '2022 - PRESENT',
        subject: 'Frontend Sowftware Engineer',
        institute: 'Nagalay Services Ltd.',
        discription:
            "As a frontend software engineer at Nagalay, I play a vital role in creating exceptional user experiences and ensuring the seamless functionality of our web applications. My expertise lies in crafting visually appealing and intuitive interfaces that align with Nagalay's design principles and user-centric approach. I collaborate closely with our design and backend teams to transform ideas into reality, utilizing my proficiency in HTML, CSS, and JavaScript frameworks.",
        iconClass: 'fa-id-card-alt',
    },

    {
        id: 20,
        date: '2021 - END',
        subject: 'WEB DEVELOPER',
        institute: 'Pondit',
        discription:
            'At Pondit, I have the opportunity to work on various projects, honing my skills in frontend development, backend programming, and database management. With the guidance of experienced instructors and hands-on practical exercises, I am gaining valuable experience in problem-solving, debugging, and collaborating with other aspiring web developers.',
        iconClass: 'fa-suitcase',
    },

    {
        id: 3444,
        date: '2018 - END',
        subject: 'DIPLOMA IN EMT',
        institute: 'RPI',
        discription:
            'A Diploma in Engineering serves as a strong foundation for further academic pursuits or entry-level positions in the engineering industry, where graduates can contribute their expertise to the development of innovative technologies and solutions.',
        iconClass: 'fa-book-open',
    },
];

const Education = () => (
    <>
        <SectionHead heading="EXPERIENCE & EDUCATION" />

        <Row>
            {education.map((edu) => (
                <MyDgree education={edu} key={edu.id} />
            ))}
        </Row>
    </>
);

export default Education;
