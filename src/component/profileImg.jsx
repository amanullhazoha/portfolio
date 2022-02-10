import { Col } from 'react-bootstrap';
import profileImg from '../images/zoha.jpg';
import classes from '../scss/profileImg.module.scss';

const ProfileImg = () => (
    <Col lg={4} sm={6}>
        <div className={classes.profileImg}>
            <img src={profileImg} alt="Amanullha" className="img-fluid" />
        </div>
    </Col>
);

export default ProfileImg;
