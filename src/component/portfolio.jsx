import { Col, Row } from 'react-bootstrap';
import classes from '../scss/portfolioItems.module.scss';

const PortfolioItems = () => {
    const project = [
        {
            id: 123954,
            img: 'nagalay.png',
            github: '',
            live: 'https://nagalay.com/',
        },

        {
            id: 123954,
            img: 'rizital.svg',
            github: '',
            live: 'https://rizital.com/',
        },

        {
            id: 123,
            img: 'coza.png',
            github: 'https://github.com/amanullhazoha/e-commarce-coza',
            live: 'https://e-commarce-coza-git-main-amanullhazoha.vercel.app/',
        },

        {
            id: 1235,
            img: 'quiz.png',
            github: 'https://github.com/amanullhazoha/quiz-application',
            live: 'https://quiz-application-git-main-amanullhazoha.vercel.app/',
        },

        {
            id: 1232,
            img: 'buynow.png',
            github: 'https://github.com/amanullhazoha/buynow_frontend',
            live: 'https://buynow-frontend-git-master-amanullhazoha.vercel.app/',
        },

        {
            id: 1239,
            img: 'space.png',
            github: 'https://github.com/amanullhazoha/space',
            live: 'https://silly-buttercream-7449b1.netlify.app/',
        },

        {
            id: 12355549,
            img: 'solasta.png',
            github: '',
            live: 'https://solastabd.com/',
        },

        {
            id: 12869,
            img: 'arsha.png',
            github: 'https://gitlab.com/Amanullhazoha3784/arsha-template',
            live: 'https://determined-cori-352836.netlify.app',
        },

        {
            id: 12854569,
            img: 'dashbord.png',
            github: 'https://gitlab.com/Amanullhazoha3784/reaponsive-dashboard',
            live: 'https://loquacious-swan-85d56e.netlify.app/',
        },

        {
            id: 123123,
            img: 'windows.png',
            github: 'https://github.com/amanullhazoha/windows-calender',
            live: 'https://bejewelled-snickerdoodle-a2a260.netlify.app/',
        },
    ];
    return (
        <div id={classes.portfolio}>
            <Row>
                {project.map((pro) => (
                    <Col lg={4} sm={6} key={pro.id}>
                        <figure>
                            <img src={`images/${pro.img}`} alt="portfolio" className="img-fluid" />

                            <figcaption>
                                <a href={pro.github} target="blank">
                                    {pro.github ? `Github` : `No`}
                                </a>
                                <a href={pro.live} target="blank">
                                    Live View
                                </a>
                            </figcaption>
                        </figure>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default PortfolioItems;
