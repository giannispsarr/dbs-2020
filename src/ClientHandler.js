import React, { Component } from 'react';
import { Col, Row, Button, Container, FormControl } from 'react-bootstrap';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './CH.css';

class ClientHandler extends React.Component {
    render() {
        return (
            <div>
                <Container bsPrefix='abc'>
                    <Row>
                        <Col>
                            <Button variant="success" bsPrefix='button1' href="/data/client/insert">Insert Client</Button>
                        </Col>
                        <Col>
                            <Button variant="success" bsPrefix='button1' href="/data/client/update">Update Client</Button>
                        </Col>
                        <Col>
                            <Button variant="success" bsPrefix='button1' href="/data/client/delete">Delete Client</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ClientHandler;