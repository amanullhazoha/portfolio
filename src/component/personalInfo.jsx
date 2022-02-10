import { Row } from 'react-bootstrap';
import Experience from './exprience';
import MyInfo from './myInfo';

const PersonalInfo = () => (
    <div className="personalInfo">
        <Row>
            <MyInfo />
            <Experience />
        </Row>
    </div>
);

export default PersonalInfo;
