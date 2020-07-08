import React, { Component } from 'react';
import { Col, Row, Button, Container, FormControl } from 'react-bootstrap';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './CH.css';

class UpdateProduct extends React.Component {

    prodUpdate = async (e) => {
        if (e) e.preventDefault();
        const shopid = e.target.elements.shopid.value;
        const ta2 = e.target.elements.ta2.value;
        const id = e.target.elements.id.value;
        const category = e.target.elements.category.value;
        console.log(shopid);
        console.log(ta2);
        console.log(id);
        console.log(category);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Form onSubmit={this.prodUpdate}>
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
                                    <Form.Label>Price:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='Total amount' name='ta2' />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group bsPrefix='group1'>
                                <Form.Row>
                                    <Form.Label>Product ID:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='(Max 8 digits)' name='id' />
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
                            <Button variant="success" bsPrefix='button' type="submit">Update</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default UpdateProduct;