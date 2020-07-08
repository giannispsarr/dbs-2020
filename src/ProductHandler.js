import React, { Component } from 'react';
import { Col, Row, Button, Container, FormControl } from 'react-bootstrap';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './CH.css';

class ProductHandler extends React.Component {
    render() {
        return (
            <div>
                <Container bsPrefix='abc'>
                    <Row>
                        <Col>
                            <Button variant="success" bsPrefix='button1' href="/data/product/insert">Insert Product</Button>
                        </Col>
                        <Col>
                            <Button variant="success" bsPrefix='button1' href="/data/product/update">Update Product</Button>
                        </Col>
                        <Col>
                            <Button variant="success" bsPrefix='button1' href="/data/product/delete">Delete Product</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ProductHandler;