import React, { Component } from 'react';
import { Col, Row, Button, Container, FormControl } from 'react-bootstrap';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './CH.css';

class DeleteProduct extends React.Component {

    prodDelete = async (e) => {
        if (e) e.preventDefault();
        const id = e.target.elements.id.value;
        const api_call = await fetch('http://localhost:3000/editproduct/delete',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    { tempbarc: id })
            });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Form onSubmit={this.prodDelete}>
                            <Form.Group bsPrefix='group1'>
                                <Form.Row>
                                    <Form.Label>Barcode:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='(Max 8 digits)' name='id' />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Button variant="success" bsPrefix='button' type="submit">Delete</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DeleteProduct;