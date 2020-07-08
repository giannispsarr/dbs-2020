import React, { Component } from 'react';
import { Col, Row, Button, Container, FormControl } from 'react-bootstrap';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './CH.css';

class InsertClient extends React.Component {

    usrInsert = async (e) => {
        if (e) e.preventDefault();
        const id = e.target.elements.id.value;
        const name = e.target.elements.name.value;
        console.log(id);
        console.log(name);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Form onSubmit={this.usrInsert}>
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
                                    <Form.Label>Username:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='ex. Nick Papadopoulos' name='name' />
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