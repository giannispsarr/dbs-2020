import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Col, Row, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './BTD.css';
import './Shop_1.css';


class BrowseTransctionData extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1" bsPrefix='category'>
                                <Form.Label>Select Shop</Form.Label>
                                <Form.Control as="select">
                                    <option>Shop 1</option>
                                    <option>Shop 2</option>
                                    <option>Shop 3</option>
                                    <option>Shop 4</option>
                                    <option>Shop 5</option>
                                    <option>Shop 6</option>
                                    <option>Shop 7</option>
                                    <option>Shop 8</option>
                                    <option>Shop 9</option>
                                    <option>Shop 10</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group bsPrefix='group1'>
                                <Form.Row>
                                    <Form.Label>Units bought:</Form.Label>
                                    <Col>
                                        <Form.Check
                                            type="radio"
                                            label=">"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="="
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="<"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                        />
                                    </Col>
                                    <Col>
                                        <FormControl placeholder='Units Bought' />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group bsPrefix='group1'>
                                <Form.Row>
                                    <Form.Label>Total amount:</Form.Label>
                                    <Col>
                                        <Form.Check
                                            type="radio"
                                            label=">"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="="
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="<"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                        />
                                    </Col>
                                    <Col>
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
                                <Form.Label>From:</Form.Label>
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
                            <Form.Group bsPrefix='group2'>
                                <Form.Label>To:</Form.Label>
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
                    </Col>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default BrowseTransctionData;