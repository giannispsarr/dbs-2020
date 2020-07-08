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

    getTransactionData = async (e) => {
        if (e) e.preventDefault();
        const shopid = e.target.elements.shopid.value;
        const ub1 = e.target.elements.ub1.value;
        const ub2 = e.target.elements.ub2.value;
        const ta1 = e.target.elements.ta1.value;
        const ta2 = e.target.elements.ta2.value;
        const category = e.target.elements.category.value;
        const payment = e.target.elements.payment.value;
        const fday = e.target.elements.fday.value;
        const fmonth = e.target.elements.fmonth.value;
        const fyear = e.target.elements.fyear.value;
        const tday = e.target.elements.tday.value;
        const tmonth = e.target.elements.tmonth.value;
        const tyear = e.target.elements.tyear.value;
        console.log(shopid);
        console.log(ub1);
        console.log(ub2);
        console.log(ta1);
        console.log(ta2);
        console.log(category);
        console.log(payment);
        console.log(fday);
        console.log(fmonth);
        console.log(fyear);
        console.log(tday);
        console.log(tmonth);
        console.log(tyear);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Form onSubmit={this.getTransactionData}>
                            <Form.Group controlId="exampleForm.ControlSelect1" bsPrefix='category'>
                                <Form.Label>Select Shop</Form.Label>
                                <Form.Control as="select" name='shopid'>
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
                                        <Form.Control as="select" name='ub1'>
                                            <option>{'>'}</option>
                                            <option>{'='}</option>
                                            <option>{'<'}</option>
                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <FormControl placeholder='Units Bought' name='ub2' />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group bsPrefix='group1'>
                                <Form.Row>
                                    <Form.Label>Total amount:</Form.Label>
                                    <Col>
                                        <Form.Control as="select" name='ta1'>
                                            <option>{'>'}</option>
                                            <option>{'='}</option>
                                            <option>{'<'}</option>
                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <FormControl placeholder='Total amount' name='ta2' />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1" bsPrefix='category'>
                                <Form.Label>Product Category</Form.Label>
                                <Form.Control as="select" name='category'>
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
                                        <Form.Control as="select" name='payment'>
                                            <option>Card</option>
                                            <option>Cash</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group bsPrefix='group2'>
                                <Form.Label>From:</Form.Label>
                                <Form.Row>
                                    <Col>
                                        <Form.Control bsPrefix='datecell' placeholder="Day" name='fday' />
                                    </Col>
                        /
                        <Col>
                                        <Form.Control bsPrefix='datecell' placeholder="Month" name='fmonth' />
                                    </Col>
                        /
                        <Col>
                                        <Form.Control bsPrefix='datecell' placeholder="Year" name='fyear' />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group bsPrefix='group2'>
                                <Form.Label>To:</Form.Label>
                                <Form.Row>
                                    <Col>
                                        <Form.Control bsPrefix='datecell' placeholder="Day" name='tday' />
                                    </Col>
                        /
                        <Col>
                                        <Form.Control bsPrefix='datecell' placeholder="Month" name='tmonth' />
                                    </Col>
                        /
                        <Col>
                                        <Form.Control bsPrefix='datecell' placeholder="Year" name='tyear' />
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