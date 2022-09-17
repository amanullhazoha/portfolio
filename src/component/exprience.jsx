import { Col, Row } from 'react-bootstrap';
import classes from '../scss/experience.module.scss';

const experience = [
    {
        id: '1dkfj',
        count: 1,
        titleFirst: 'YEARS OF',
        titleLast: 'EXPERIENCE',
    },

    {
        id: '1dkdfj',
        count: 15,
        titleFirst: 'COMPLETE',
        titleLast: 'PROJECTS',
    },

    {
        id: '1dkdffj',
        count: 5,
        titleFirst: 'HAPPY',
        titleLast: 'CUSTOMERS',
    },

    {
        id: '1dkfjds',
        count: 0,
        titleFirst: 'AWARD',
        titleLast: 'WON',
    },
];

const Experience = () => (
    <Col lg={6}>
        <Row>
            {experience.map((exp) => (
                <Col lg={6} key={exp.id}>
                    <div className={classes.content}>
                        <div className={classes.number}>
                            {exp.count}
                            <sup>+</sup>
                        </div>
                        <p>
                            {exp.titleFirst}
                            <br />
                            {exp.titleLast}
                        </p>
                    </div>
                </Col>
            ))}
        </Row>
    </Col>
);

export default Experience;
