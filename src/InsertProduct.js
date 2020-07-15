import React, { Component } from 'react';
import { Col, Row, Button, Container, FormControl } from 'react-bootstrap';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './CH.css';

class InsertProduct extends React.Component {

    prodInsert = async (e) => {
        if (e) e.preventDefault();
        const name = e.target.elements.name.value;
        const ta2 = e.target.elements.ta2.value;
        const id = e.target.elements.id.value;
        const category = e.target.elements.category.value;
        const label = e.target.elements.label.value;
        const api_call = await fetch('http://localhost:3000/editproduct/insert',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    { tempincate: category },
                    { tempname: name },
                    { templabel: label },
                    { tempprice: ta2 },
                    { tempbarc: id })
            });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Form onSubmit={this.prodInsert}>
                            <Form.Group bsPrefix='group1'>
                                <Form.Row>
                                    <Form.Label>Product Name:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='Product Name' name='name' />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
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
                                    <Form.Label>Label:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='Label' name='label' />
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
                            <Form.Group controlId="exampleForm.ControlSelect1" bsPrefix='category'>
                                <Form.Label>Product Category</Form.Label>
                                <Form.Control as="select" name='category'>
                                    <option>Προϊόντα Ψυγείου</option>
                                    <option>Είδη Σπιτιού</option>
                                    <option>Κάβα</option>
                                    <option>Κατοικίδια</option>
                                    <option>Φρέσκα Προϊόντα</option>
                                    <option>Προσωπικής Περιποίησης</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="success" bsPrefix='button' type="submit">Insert</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default InsertProduct;