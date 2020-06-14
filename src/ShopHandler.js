import React, { Component } from 'react';
import { Col, Row, Button, Container, FormControl } from 'react-bootstrap';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './CH.css';

class ShopHandler extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1" bsPrefix='category'>
                                    <Form.Label>Choose action</Form.Label>
                                    <Form.Control as="select">
                                        <option>Insert New Data</option>
                                        <option>Edit Existing Data</option>
                                        <option>Delete Data</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ShopHandler;