import React, { Component } from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { Line, Pie, Bar, Doughnut } from 'react-chartjs-2';
import { Route, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import './Shop_1.css';
import './GD.css';

class DataPerStore extends React.Component {

    state = {
        barData1: undefined,
        barData2: undefined,
        barData3: undefined,
        visiting_hours: [],
        age_range: [],
        percentage: [],
        list: [],
        width: 500,
        height: 350
    }

    getDataPerStore = async (e) => {
        if (e) e.preventDefault();
        const shopid = e.target.elements.shopid.value;
        const shopid2 = parseInt(shopid, 10);
        const api_call = await fetch('http://localhost:3000/perstore',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ tempstoreid: shopid2 })
            });
        if (api_call.ok) {
            const data = await api_call.json();
            console.log(data);
            const map1 = [];
            const map2 = [];
            const map3 = [];
            const map4 = [];
            const map5 = [];
            const map6 = [];
            const final = [];
            const list1 = [];
            for (let i = 0; i < data.query9.length; i++) {
                map1[i] = data.query9[i].aray;
            }
            for (let i = 0; i < data.query9.length; i++) {
                map2[i] = data.query9[i].shelf;
            }
            for (let i = 0; i < data.query9.length; i++) {
                map3[i] = data.query9[i].Units_bought;
            }
            for (let i = 0; i < data.query12.length; i++) {
                map4[i] = data.query12[i].visiting_hours;
            }
            for (let i = 0; i < data.query12.length; i++) {
                map5[i] = data.query12[i].age_range;
            }
            for (let i = 0; i < data.query12.length; i++) {
                list1[i] = i;
            }
            for (let i = 0; i < data.query12.length; i++) {
                map6[i] = data.query12[i].percentage;
            }
            for (let i = 0; i < map1.length; i++) {
                final[i] = `${map1[i]}-${map2[i]}`;
            }
            this.setState({
                barData1: {
                    labels: final,
                    datasets: [{
                        label: 'Most visited spots on the shops',
                        data: map3,
                        borderColor: 'rgba(3, 0, 4, 1)',
                        borderDash: [20, 20],
                        backgroundColor: 'rgb(89, 71, 167)',
                        pointBackgroundColor: 'rgba(3, 0, 4, 1)',
                        pointBorderColor: 'rgba(3, 0, 4, 1)',
                        pointHoverBackgroundColor: 'rgba(3, 0, 4, 1)',
                        pointHoverBorderColor: 'rgba(3, 0, 4, 1)'
                    }]
                },
                visiting_hours: map4,
                age_range: map5,
                percentage: map6,
                list: list1
            })
        }
    }

    renderStore = (index) => {
        return (
            <tr key={index}>
                <td>{this.state.visiting_hours[index]}</td>
                <td>{this.state.age_range[index]}</td>
                <td>{this.state.percentage[index]}</td>
            </tr>
        )
    }

    render() {
        let storeArray = this.state.list;
        return (
            <div>
                <Row>
                    <Col>
                        <Form onSubmit={this.getDataPerStore}>
                            <Form.Group controlId="exampleForm.ControlSelect1" bsPrefix='category'>
                                <Form.Label>Select Shop</Form.Label>
                                <Form.Control as="select" name='shopid'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="success" bsPrefix='button' type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row><Container>
                    <Row>
                        <Col>
                            <Bar data={this.state.barData1} width={this.state.width} height={this.state.height}
                                options={{
                                    responsive: false,
                                    maintainAspectRatio: false
                                }} />
                        </Col>
                        <Col>
                            <Table striped bordered hover responsive sm>
                                <thead>
                                    <tr>
                                        <th>Visiting Hours</th>
                                        <th>Age Range</th>
                                        <th>Percentage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {storeArray.map(this.renderStore)}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default DataPerStore;