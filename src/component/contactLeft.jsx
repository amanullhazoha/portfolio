/* eslint-disable react/jsx-curly-brace-presence */
import { Col } from 'react-bootstrap';
import classes from '../scss/contactLeft.module.scss';
import ContactInfo from './contactInfo';
import SocialLink from './socialLink';

const ContactLeft = () => (
    <Col lg={4}>
        <div className={classes.head}>{`DON'T BE SHY !`}</div>
        <p>
            Feel free to get in touch with me. I am always open to discussing new projects, creative
            ideas or opportunities to be part of your visions.
        </p>

        <ContactInfo icon="fa-envelope-open" title="MAIL ME" text="amanullhazoha3784@gmail.com" />

        <ContactInfo icon="fa-phone-alt" title="CALL ME" text="+8801715378419" />

        <SocialLink />
    </Col>
);

export default ContactLeft;
