import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Col, Row, FormControl, Container } from 'react-bootstrap';
import { Line, Bar } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
import { Route, Link, Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './BU.css';
import './GD.css';

class BrowseUsers extends React.Component {

    state = {
        redirect: false,
        page: undefined,
        barData1: undefined,
        barData2: undefined,
        barData3: undefined,
        width: 500,
        height: 350,
        a: undefined,
        b: undefined,
        c: undefined,
        e: undefined,
        f: undefined
    }

    getUser = async (e) => {
        if (e) e.preventDefault();
        const user = e.target.elements.user.value;
        const user2 = parseInt(user, 10);
        const api_call = await fetch(`http://localhost:3000/users`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ usercardid: user2 })
            });
        if (api_call.ok) {
            const data = await api_call.json();
            const map1 = [];
            const map2 = [];
            const map3 = [];
            const map4 = [];
            const d = [];
            const map5 = [];
            const map6 = [];
            const map7 = [];
            for (let i = 0; i < data.query7a.length; i++) {
                map1[i] = data.query7a[i].name;
            }
            for (let i = 0; i < data.query7a.length; i++) {
                map2[i] = data.query7a[i].total;
            }
            for (let i = 0; i < data.query7b.length; i++) {
                map3[i] = data.query7b[i].num_of_shops;
            }
            for (let i = 0; i < data.query7c.length; i++) {
                map4[i] = `${data.query7c[i].stid}, `;
            }
            for (let i = 0; i < data.query7d.length; i++) {
                map5[i] = `${data.query7d[i].time}, `;
                d[i] = `${i}`;
            }
            for (let i = 0; i < data.query7e.length; i++) {
                map6[i] = data.query7e[i].average_cost_week;
            }
            for (let i = 0; i < data.query7f.length; i++) {
                map7[i] = data.query7f[i].average_cost_month;
            }
            this.setState({
                redirect: true,
                a: map3,
                b: map4,
                c: map6,
                e: map7,
                f: map5,
                page: user,
                barData1: {
                    labels: map1,
                    datasets: [{
                        label: '10 most popular products of User',
                        data: map2,
                        borderColor: 'rgba(3, 0, 4, 1)',
                        borderDash: [20, 20],
                        backgroundColor: 'rgb(89, 71, 167)',
                        pointBackgroundColor: 'rgba(3, 0, 4, 1)',
                        pointBorderColor: 'rgba(3, 0, 4, 1)',
                        pointHoverBackgroundColor: 'rgba(3, 0, 4, 1)',
                        pointHoverBorderColor: 'rgba(3, 0, 4, 1)'
                    }]
                },
                barData2: {
                    labels: map5,
                    datasets: [{
                        label: 'Hours',
                        data: map5,
                        borderColor: 'rgba(3, 0, 4, 1)',
                        borderDash: [20, 20],
                        backgroundColor: 'rgb(89, 71, 167)',
                        pointBackgroundColor: 'rgba(3, 0, 4, 1)',
                        pointBorderColor: 'rgba(3, 0, 4, 1)',
                        pointHoverBackgroundColor: 'rgba(3, 0, 4, 1)',
                        pointHoverBorderColor: 'rgba(3, 0, 4, 1)'
                    }]

                }
            })
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.getUser}>
                    <Form.Group controlId="exampleForm.ControlSelect1" bsPrefix='category'>
                        <Form.Label>Select User</Form.Label>
                        <Form.Control as="select" name='user'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="success" bsPrefix='dropbtn' type="submit">Submit</Button>
                </Form>
                <Container>
                    <Row>
                        <Col>
                            <Bar data={this.state.barData1} width={this.state.width} height={this.state.height}
                                options={{
                                    responsive: false,
                                    maintainAspectRatio: false
                                }} />
                        </Col>
                        <Col>
                            <h7>Hours visited: {this.state.f}</h7>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <h7>Number of shops: {this.state.a}</h7>
                        </Col>
                        <Col>
                            <h8>Shops visited: {this.state.b}</h8>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <h9>Weekly transaction mean: {this.state.c}</h9>
                        </Col>
                        <Col>
                            <h10>Monthly transaction mean: {this.state.e}</h10>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default BrowseUsers;