import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

const Contact = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }

    return (
        <div>
            <div className="text-center my-5 fw-bold p-5">

                <h1>Contact US</h1>
                <p>Any questions or help? Just contact with us</p>
            </div>
            <Container>
                <Row className="grid g-5">
                    <Col>
                        <div className="text-center fw-bold">
                            <h3 className="mb-4">Contact Inforamtion</h3>

                            <p><i className="fas fa-phone-alt"></i> +88-016772XXXXX</p>
                            <p><i className="fas fa-envelope"></i> kbohg@gmail.com</p>
                            <p><i className="fas fa-map-marker-alt"></i> Dhaka Bangladesh</p>

                            <h5>Follow Us</h5>
                            <div className="d-flex justify-content-center">

                                <h3><i className="fab fa-facebook-square mx-3"></i></h3>
                                <h3><i className="fab fa-twitter-square mx-3"></i></h3>
                                <h3><i className="fab fa-instagram-square mx-3"></i></h3>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3 fw-bold">
                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                        defaultValue="Mark"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Last name"
                                        defaultValue="Otto"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                            </Row>
                            <Row className="mb-3 fw-bold">
                                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                    <Form.Label>Email</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Required
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                    <Form.Label>Phone</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="text"
                                            placeholder="number"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Required
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <h6 className="fw-bold">Write a Message or Course name</h6>
                            <textarea style={{ width: "360px" }} id="exampleFormControlTextarea1" rows="3"></textarea> <br />
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container >

        </div >
    );
};

export default Contact;
