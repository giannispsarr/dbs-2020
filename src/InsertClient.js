import React, { Component } from 'react';
import { Col, Row, Button, Container, FormControl } from 'react-bootstrap';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './CH.css';
import './BTD.css';

class InsertClient extends React.Component {

    usrInsert = async (e) => {
        if (e) e.preventDefault();
        const fname = e.target.elements.fname.value;
        const lname = e.target.elements.lname.value;
        const phone = e.target.elements.phone.value;
        const email = e.target.elements.email.value;
        const city = e.target.elements.city.value;
        const street = e.target.elements.street.value;
        const number = e.target.elements.number.value;
        const code = e.target.elements.code.value;
        const ssn = e.target.elements.ssn.value;
        const age = e.target.elements.age.value;
        const credits = e.target.elements.credits.value;
        const gender = e.target.elements.gender.value;
        const day = e.target.elements.day.value;
        const month = e.target.elements.month.value;
        const year = e.target.elements.year.value;
        const birthdate = `${year}-${month}-${day}`;
        const api_call = await fetch('http://localhost:3000/editcustomer/insert',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        tempinssn: ssn,
                        tempincusfname: `${fname}`,
                        tempincuslname: `${lname}`,
                        tempincusstreet: `${street}`,
                        tempincusstnumber: number,
                        tempincuspstcode: code,
                        tempincuscity: `${city}`,
                        tempincusemail: `${email}`,
                        tempincusphone: phone,
                        tempincusbirthdate: `${birthdate}`,
                        tempincusgender: `${gender}`,
                        tempincusrewa: `${credits}`,
                        tempincusage: age
                    })
            });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Form onSubmit={this.usrInsert}>
                            <Form.Group bsPrefix='group1'>
                                <Form.Row>
                                    <Form.Label>First Name:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='ex. Nick ' name='fname' />
                                    </Col>
                                    <Form.Label>Last Name:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='ex. Papadopoulos ' name='lname' />
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
                            <Form.Group bsPrefix='group1'>
                                <Form.Row>
                                    <Form.Label>SSN:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='' name='ssn' />
                                    </Col>
                                    <Form.Label>Age:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='' name='age' />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Label>Credits:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='' name='credits' />
                                    </Col>
                                    <Form.Label>Gender:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='' name='gender' />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group bsPrefix='group2'>
                                <Form.Label>Birthdate:</Form.Label>
                                <Form.Row>
                                    <Col>
                                        <Form.Control bsPrefix='datecell' placeholder="Day" name='day' />
                                    </Col>
                        /
                        <Col>
                                        <Form.Control bsPrefix='datecell' placeholder="Month" name='month' />
                                    </Col>
                        /
                        <Col>
                                        <Form.Control bsPrefix='datecell' placeholder="Year" name='year' />
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

export default InsertClient;