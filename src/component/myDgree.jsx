import { Col } from 'react-bootstrap';
import classes from '../scss/myDgree.module.scss';

const MyDgree = ({ education }) => (
    <Col lg={6} key={education.id}>
        <div className={classes.content}>
            <p className={classes.date}>{education.date}</p>
            <h4>
                {education.subject}
                <span> - {education.institute}</span>
            </h4>
            <p className={classes.text}>{education.discription}</p>

            <div className={classes.icon}>
                <i className={`fas ${education.iconClass}`} />
            </div>
        </div>
    </Col>
);

export default MyDgree;
