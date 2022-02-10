import { Row } from 'react-bootstrap';
import ContactForm from '../contactForm';
import ContactLeft from '../contactLeft';
import Heading from '../heading';
import PageLayout from '../pageLayout';

const Contact = () => (
    <PageLayout>
        <Heading titleFirst="Get in" titleLast="Touch" titleBg="Contact" />
        <Row>
            <ContactLeft />
            <ContactForm />
        </Row>
    </PageLayout>
);

export default Contact;
