import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Row, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Shop_1.css';

class Shop_6 extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Welcome to Shop #6!
                </h1>
                <Form>
                    <Form.Group bsPrefix='group1'>
                        <Form.Row>
                            <Col>
                                <Form.Label>Units bought:</Form.Label>
                                <FormControl placeholder='Units Bought' />
                            </Col>
                            <Col>
                                <Form.Label>Total amount:</Form.Label>
                                <FormControl placeholder='Total amount' />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1" bsPrefix='category'>
                        <Form.Label>Product Category</Form.Label>
                        <Form.Control as="select">
                            <option>Category #1</option>
                            <option>Category #2</option>
                            <option>Category #3</option>
                            <option>Category #4</option>
                            <option>Category #5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group bsPrefix='group2'>
                        <Form.Row>
                            <Form.Label as="legend" column sm={2}>
                                Paid with:
                        </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Cash"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Credit/Debit Card"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group bsPrefix='group2'>
                        <Form.Label>Date:</Form.Label>
                        <Form.Row>
                            <Col>
                                <Form.Control bsPrefix='datecell' placeholder="Day" />
                            </Col>
                        /
                        <Col>
                                <Form.Control bsPrefix='datecell' placeholder="Month" />
                            </Col>
                        /
                        <Col>
                                <Form.Control bsPrefix='datecell' placeholder="Year" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Button variant="success" bsPrefix='button' type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Shop_6;