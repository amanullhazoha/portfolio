import { Col, Row } from 'react-bootstrap';
import classes from '../scss/portfolioItems.module.scss';

const PortfolioItems = () => {
    const project = [
        {
            id: 123,
            img: 'zoha.jpg',
            title: 'My Project',
        },

        {
            id: 1232,
            img: 'zoha.jpg',
            title: 'My Project',
        },

        {
            id: 1235,
            img: 'zoha.jpg',
            title: 'My Project',
        },

        {
            id: 1243,
            img: 'zoha.jpg',
            title: 'My Project',
        },

        {
            id: 1233,
            img: 'zoha.jpg',
            title: 'My Project',
        },

        {
            id: 1231,
            img: 'zoha.jpg',
            title: 'My Project',
        },
    ];
    return (
        <div id={classes.portfolio}>
            <Row>
                {project.map((pro) => (
                    <Col lg={4} sm={6} key={pro.id}>
                        <figure>
                            <img src={`images/${pro.img}`} alt="portfolio" className="img-fluid" />

                            <div className={classes.portfolioTitle}>{pro.title}</div>
                        </figure>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default PortfolioItems;
