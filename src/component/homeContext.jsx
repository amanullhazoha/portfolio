/* eslint-disable react/jsx-curly-brace-presence */
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import classes from '../scss/homeContent.module.scss';
import ButtonStyle from './buttonStyle';

const HomeContent = () => (
    <Col lg={8}>
        <div className={classes.content}>
            <h1>{"I'M AMANULLHA ZOHA."}</h1>

            <h2>
                <Typewriter
                    options={{
                        strings: ['Web developer', 'Frontend'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h2>
            <p>
                {`I'm a Bangladesh based frontend web developer & designer focused on crafting clean
                & user‑friendly experiences, I am passionate about building excellent software that
                improves the lives of those around me.`}
            </p>
            <Link to="/about">
                <ButtonStyle text="more about me" iconClass="fa-arrow-right" />
            </Link>
        </div>
    </Col>
);

export default HomeContent;
