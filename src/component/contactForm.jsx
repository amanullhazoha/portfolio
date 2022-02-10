import { getDatabase, ref, set } from 'firebase/database';
import { useReducer, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import '../firebase';
import classes from '../scss/contactForm.module.scss';
import ButtonStyle from './buttonStyle';
import Input from './input';

const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'name':
            return { ...state, name: action.value };
        case 'email':
            return { ...state, email: action.value };
        case 'subject':
            return { ...state, subject: action.value };
        case 'message':
            return { ...state, message: action.value };
        case 'submit':
            return initialState;
        default:
            return state;
    }
};

const ContactForm = () => {
    const [error, setError] = useState(true);
    const [state, dispatch] = useReducer(reducer, initialState);
    // eslint-disable-next-line global-require
    const shortid = require('shortid');

    const formValidation = (formData) => {
        if (!formData.name) {
            setError('Please Enter Your Name.');
        } else if (!formData.email) {
            setError('Please Enter Your Email.');
        } else if (!formData.subject) {
            setError('Please Enter Your Subject.');
        } else if (!formData.message) {
            setError('Please Enter Your Message.');
        } else {
            setError('');
            dispatch({
                type: 'submit',
            });
        }
    };

    const sendMessage = async (message) => {
        const db = getDatabase();
        const messageRef = ref(db, `messaging/${message.id}`);
        try {
            await set(messageRef, {
                message,
            });
        } catch (err) {
            console.log(err);
        }
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        formValidation(state);
        const setState = { ...state, id: shortid.generate() };
        console.log(error);
        sendMessage(setState);
        setError(true);
    };

    return (
        <Col lg={8}>
            <div className={classes.content}>
                <Form onSubmit={handelSubmit} autoComplete="off">
                    <Row>
                        <Col md={4}>
                            <Input
                                type="text"
                                placeholder="Your Name"
                                className={classes.input}
                                name="name"
                                value={state.name}
                                onChange={(e) =>
                                    dispatch({
                                        type: 'name',
                                        value: e.target.value,
                                    })
                                }
                            />
                        </Col>

                        <Col md={4}>
                            <Input
                                type="email"
                                placeholder="Your Email"
                                className={classes.input}
                                name="email"
                                value={state.email}
                                onChange={(e) =>
                                    dispatch({
                                        type: 'email',
                                        value: e.target.value,
                                    })
                                }
                            />
                        </Col>

                        <Col md={4}>
                            <Input
                                type="text"
                                placeholder="Your Subject"
                                className={classes.input}
                                name="subject"
                                value={state.subject}
                                onChange={(e) =>
                                    dispatch({
                                        type: 'subject',
                                        value: e.target.value,
                                    })
                                }
                            />
                        </Col>

                        <Col md={12}>
                            <textarea
                                rows="8"
                                placeholder="Your Message"
                                className={classes.input}
                                name="message"
                                value={state.message}
                                onChange={(e) =>
                                    dispatch({
                                        type: 'message',
                                        value: e.target.value,
                                    })
                                }
                            />
                        </Col>

                        <Col>
                            <ButtonStyle
                                type="submit"
                                text="send message"
                                iconClass="fa-paper-plane"
                            />
                        </Col>
                    </Row>
                </Form>
            </div>
        </Col>
    );
};

export default ContactForm;
