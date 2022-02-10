import { Container } from 'react-bootstrap';
import classes from '../scss/pageLayout.module.scss';

const PageLayout = ({ children }) => (
    <section id={classes.main}>
        <Container>{children}</Container>
    </section>
);

export default PageLayout;
