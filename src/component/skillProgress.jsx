import { Col } from 'react-bootstrap';
import classes from '../scss/skillProgress.module.scss';

const SkillProgress = ({ skill }) => (
    <Col lg={3} md={4} sm={6} key={skill.id}>
        <div className={classes.content}>
            <div className={classes.circle}>
                <svg>
                    <circle
                        id="circle"
                        cx="20"
                        cy="20"
                        r="60"
                        style={{ strokeDasharray: `${(377 / 100) * skill.percent}` }}
                    />
                </svg>

                <div className={classes.percentage}>{skill.percent}%</div>
            </div>

            <h3>{skill.skill}</h3>
        </div>
    </Col>
);

export default SkillProgress;
