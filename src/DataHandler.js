import React, { Component } from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import './DH.css';

class DataHandler extends React.Component {
    render() {
        return (
            <div>
                <Container bsPrefix='abc'>
                    <Row>
                        <Col>
                            <Button variant="success" bsPrefix='button1' href="/data/client">Client data</Button>
                        </Col>
                        <Col>
                            <Button variant="success" bsPrefix='button1' href="/data/product">Product data</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default DataHandler;