import React, { Component } from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { Line, Pie, Bar, Doughnut } from 'react-chartjs-2';
import { Route, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap';
import './Shop_1.css';
import './GD.css';

class DataPerStore extends React.Component {

    state = {
        barData1: undefined,
        barData2: undefined,
        barData3: undefined,
        width: 500,
        height: 350
    }

    getDataPerStore = async (e) => {
        if (e) e.preventDefault();
        const shopid = e.target.elements.shopid.value;
        console.log(shopid);
        const api_call = await fetch('http://localhost:3000/perstore',
            {
                method: 'POST',
                datastoreid: shopid
            });
        if (api_call.ok) {
            const data = await api_call.json();
            console.log(data);
        } else { console.log('malakia'); }
        this.setState({
            barData1: {
                labels: ['King size OCBs-Chips', 'Condoms-Lube', 'Pork-Pitta', 'Shampoo-Sponge', 'Fruit-Veggies'],
                datasets: [{
                    label: 'Most popular couple of products',
                    data: [10, 8, 7, 5, 4, 0],
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
                labels: ['A3', 'B7', 'A5', 'D4', 'B11'],
                datasets: [{
                    label: 'Most visited spots on the shops',
                    data: [13, 10, 8, 7, 7, 0],
                    borderColor: 'rgba(3, 0, 4, 1)',
                    borderDash: [20, 20],
                    backgroundColor: 'rgb(89, 71, 167)',
                    pointBackgroundColor: 'rgba(3, 0, 4, 1)',
                    pointBorderColor: 'rgba(3, 0, 4, 1)',
                    pointHoverBackgroundColor: 'rgba(3, 0, 4, 1)',
                    pointHoverBorderColor: 'rgba(3, 0, 4, 1)'
                }]
            },
            barData3: {
                labels: ['Poultry', 'Fruit', 'Veggies', 'Hygiene', 'Bakery Products'],
                datasets: [{
                    label: 'Percentage of shop branded products prefered over other brands',
                    data: [10, 15, 15, 26, 37, 0, 100],
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

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Form onSubmit={this.getDataPerStore}>
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
                            <Button variant="success" bsPrefix='button' type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DataPerStore;