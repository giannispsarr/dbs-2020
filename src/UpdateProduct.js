import React, { Component } from 'react';
import { Col, Row, Button, Container, FormControl } from 'react-bootstrap';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './CH.css';

class UpdateProduct extends React.Component {

    prodUpdate = async (e) => {
        if (e) e.preventDefault();
        const ta2 = e.target.elements.ta2.value;
        const id = e.target.elements.id.value;
        const api_call = await fetch('http://localhost:3000/editproduct/update',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        updaprice: ta2,
                        updabarc: id
                    })
            });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Form onSubmit={this.prodUpdate}>
                            <Form.Group bsPrefix='group1'>
                                <Form.Row>
                                    <Form.Label>Price:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='Price' name='ta2' />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group bsPrefix='group1'>
                                <Form.Row>
                                    <Form.Label>Barcode:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='(Max 8 digits)' name='id' />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Button variant="success" bsPrefix='button' type="submit">Update</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default UpdateProduct;