import { Row } from 'react-bootstrap';
import classes from '../scss/homeLayout.module.scss';

const HomeLayout = ({ children }) => (
    <section id={classes.main}>
        <div className={classes.homeContainer}>
            <Row style={{ justifyContent: 'center' }}>{children}</Row>
        </div>
    </section>
);

export default HomeLayout;
