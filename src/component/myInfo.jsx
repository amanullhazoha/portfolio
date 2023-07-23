/* eslint-disable react/no-array-index-key */
import { Col, Row } from 'react-bootstrap';
import classes from '../scss/myInfo.module.scss';
import ButtonStyle from './buttonStyle';

const myInfo = [
    {
        info: [
            { key: 'First Name', value: 'Amanullha' },
            { key: 'Last Name', value: 'Zoha' },
            { key: 'Age', value: '25' },
            { key: 'Nationality', value: 'Bangladeshi' },
            { key: 'Freelance', value: 'Available' },
        ],
    },

    {
        info: [
            { key: 'Address', value: 'Kallyanpur, Dhaka' },
            { key: 'Phone', value: '8801715378419' },
            { key: 'Email', value: 'amanullhazoha3784@gmail.com' },
            { key: 'Skype', value: 'Amanullha Zoha' },
            { key: 'Languages', value: 'Bangla, English' },
        ],
    },
];

const MyInfo = () => (
    <Col lg={6}>
        <div className={classes.head}>PERSONAL INFOS</div>

        <Row>
            {myInfo.map((info, index) => (
                <Col sm={6} key={index}>
                    <ul className={classes.myInfo}>
                        {info.info.map((i) => (
                            <li key={i.key}>
                                <span>{i.key}</span> : {i.value}
                            </li>
                        ))}
                    </ul>
                </Col>
            ))}

            <Col style={{ marginBottom: '30px' }}>
                <a href="https://drive.google.com/u/0/uc?id=1pjNK3bvXLhj2TtZfnPflo2dlifa9lcZJ&export=download">
                    <ButtonStyle text="Download resume" iconClass="fa-cloud-download-alt" />
                </a>
            </Col>
        </Row>
    </Col>
);

export default MyInfo;
