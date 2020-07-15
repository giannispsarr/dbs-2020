import React, { Component } from 'react';
import { Col, Row, Button, Container, FormControl } from 'react-bootstrap';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './CH.css';

class UpdateClient extends React.Component {

    usrUpdate = async (e) => {
        if (e) e.preventDefault();
        const phone = e.target.elements.phone.value;
        const email = e.target.elements.email.value;
        const id = e.target.elements.id.value;
        const city = e.target.elements.city.value;
        const street = e.target.elements.street.value;
        const number = e.target.elements.number.value;
        const code = e.target.elements.code.value;
        const api_call = await fetch('http://localhost:3000/editcustomer/update',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    { cardid: id },
                    { tempupphone: phone },
                    { tempupemail: email },
                    { tempupstreet: street },
                    { tempupcity: city },
                    { tempupstnumber: number },
                    { tempuppstcode: code })
            });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Form onSubmit={this.usrUpdate}>
                            <Form.Group bsPrefix='group1'>
                                <Form.Row>
                                    <Form.Label>User ID:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='(Max 8 digits)' name='id' />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group bsPrefix='group1'>
                                <Form.Row>
                                    <Form.Label>Phone:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='ex. 6988888888' name='phone' />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group bsPrefix='group1'>
                                <Form.Row>
                                    <Form.Label>Email:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='example@example.gr' name='email' />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group bsPrefix='group1'>
                                <Form.Row>
                                    <Form.Label>City:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='' name='city' />
                                    </Col>
                                    <Form.Label>Street:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='' name='street' />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Label>Number:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='' name='number' />
                                    </Col>
                                    <Form.Label>Postal Code:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='' name='code' />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Button variant="success" bsPrefix='button' type="submit">Insert</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default UpdateClient;