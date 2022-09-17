import { Row } from 'react-bootstrap';
import SectionHead from './sectionHead';
import SkillProgress from './skillProgress';

const skillProgress = [
    {
        id: 123,
        skill: 'JavaScript',
        percent: 70,
    },

    {
        id: 1236,
        skill: 'React JS',
        percent: 80,
    },

    {
        id: 12363,
        skill: 'Firebase',
        percent: 50,
    },

    {
        id: 123653,
        skill: 'SASS',
        percent: 90,
    },

    {
        id: 1653,
        skill: 'CSS',
        percent: 85,
    },

    {
        id: 165334,
        skill: 'Bootstrap',
        percent: 90,
    },

    {
        id: 16533,
        skill: 'Metarial UI',
        percent: 70,
    },

    {
        id: 165333,
        skill: 'HTML',
        percent: 95,
    },
];

const Skills = () => (
    <>
        <SectionHead heading="My skills" />
        <Row>
            {skillProgress.map((skill) => (
                <SkillProgress skill={skill} key={skill.id} />
            ))}
        </Row>
    </>
);

export default Skills;
