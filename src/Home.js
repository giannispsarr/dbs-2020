import React, { Component } from 'react';
import './Home.css';
import { Jumbotron, Col, Image, Container, Row } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron >
                    <h1>Welcome!</h1>
                    <p>
                        This website is made for a certain supermarket chain, to help keep track of customer
                        preferences, product data and provide useful statistics to the marketing department of
                        the company.
                    </p>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src="https://i.ya-webdesign.com/images/cart-icon-png-1.png" fluid />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;