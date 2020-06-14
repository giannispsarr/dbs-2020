import React, { Component } from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { Line, Pie, Bar, Doughnut } from 'react-chartjs-2';
import './GD.css';

class GeneralData extends React.Component {

    state = {
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
        },
        barData4: {
            labels: ['15:00-16:00', '17:00-18:00', '18:00-19:00', '19:00-20:00', '16:00-17:00'],
            datasets: [{
                label: 'Hours with most money spent per person (in Euros) ',
                data: [80.3, 77.8, 65.2, 52.3, 50.7, 0],
                borderColor: 'rgba(3, 0, 4, 1)',
                borderDash: [20, 20],
                backgroundColor: 'rgb(89, 71, 167)',
                pointBackgroundColor: 'rgba(3, 0, 4, 1)',
                pointBorderColor: 'rgba(3, 0, 4, 1)',
                pointHoverBackgroundColor: 'rgba(3, 0, 4, 1)',
                pointHoverBorderColor: 'rgba(3, 0, 4, 1)'
            }]
        },
        barData5: {
            labels: ['40-49', '50-59', '30-39', '20-29', '60-69', '70-79', '10-19'],
            datasets: [{
                label: 'Hours with most money spent per person (in Euros) ',
                data: [25.2, 24.3, 23.1, 15.2, 8.7, 2.2, 1.3],
                //borderColor: 'rgba(10, 10, 20, 1)',
                //borderDash: [20, 20],
                backgroundColor: ['rgba(89, 71, 167, 1)', 'rgba(62, 33, 53, 1)', 'rgba(42, 40, 54, 1)', 'rgba(38, 47, 44, 1)', 'rgba(67, 25, 72, 1)', 'rgba(60, 72, 130, 1)', 'rgba(80, 63, 59, 1)'],
                pointBackgroundColor: 'rgba(3, 0, 4, 1)',
                pointBorderColor: 'rgba(3, 0, 4, 1)',
                pointHoverBackgroundColor: 'rgba(3, 0, 4, 1)',
                pointHoverBorderColor: 'rgba(3, 0, 4, 1)'
            }]
        },
        width: 500,
        height: 350
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h3>General Statistics</h3>
                        </Col>
                    </Row>
                </Container>
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
                            <Bar data={this.state.barData2} width={this.state.width} height={this.state.height}
                                options={{
                                    responsive: false,
                                    maintainAspectRatio: false
                                }} />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <Bar data={this.state.barData3} width={this.state.width} height={this.state.height}
                                options={{
                                    responsive: false,
                                    maintainAspectRatio: false
                                }} />
                        </Col>
                        <Col>
                            <Bar data={this.state.barData4} width={this.state.width} height={this.state.height}
                                options={{
                                    responsive: false,
                                    maintainAspectRatio: false
                                }} />
                        </Col>
                    </Row>
                </Container>
                <Container bsPrefix='skato'>
                    <Row>
                        <Col>
                            <Pie data={this.state.barData5} width={500} height={400}
                                options={{
                                    responsive: false,
                                    maintainAspectRatio: false
                                }} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default GeneralData;