/* eslint-disable react/jsx-curly-brace-presence */
import { Col } from 'react-bootstrap';
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
                {`I'm a Bangladesh based MERN Stack web developer & designer focused on crafting clean
                & user‑friendly experiences, I am passionate about building excellent software that
                improves the lives of those around me.`}
            </p>
            <a href="about.html">
                <ButtonStyle text="more about me" iconClass="fa-arrow-right" />
            </a>
        </div>
    </Col>
);

export default HomeContent;
