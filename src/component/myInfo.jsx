/* eslint-disable react/no-array-index-key */
import { Col, Row } from 'react-bootstrap';
import classes from '../scss/myInfo.module.scss';
import ButtonStyle from './buttonStyle';

const myInfo = [
    {
        info: [
            { key: 'First Name', value: 'Amanullha' },
            { key: 'Last Name', value: 'Zoha' },
            { key: 'Age', value: '23' },
            { key: 'Nationality', value: 'Bangladeshi' },
            { key: 'Freelance', value: 'Available' },
        ],
    },

    {
        info: [
            { key: 'Address', value: 'Gulshan-2, Dhaka' },
            { key: 'Phone', value: '8801857526232' },
            { key: 'Email', value: 'naziullahshawn135@gmail.com' },
            { key: 'Skype', value: 'Naziullah Shawn' },
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
                <ButtonStyle text="Download resume" iconClass="fa-cloud-download-alt" />
            </Col>
        </Row>
    </Col>
);

export default MyInfo;
