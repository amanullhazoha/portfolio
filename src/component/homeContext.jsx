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
                        strings: ['Frontend', 'Software Engineer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h2>
            <p>
                {`As a frontend software engineer, I am dedicated to crafting captivating user experiences and seamless interfaces that bridge the gap between technology and users. My expertise lies in HTML, CSS, and JavaScript, which I use to transform design concepts into functional and visually appealing web applications.

                Collaborating closely with design and backend teams, I ensure that the user interface aligns with the overall vision and meets the needs of our users. I am passionate about staying up-to-date with the latest trends and best practices in frontend development to continuously enhance the performance and efficiency of our digital products.`}
            </p>
            <Link to="/about">
                <ButtonStyle text="more about me" iconClass="fa-arrow-right" />
            </Link>
        </div>
    </Col>
);

export default HomeContent;
