import React, { Component } from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { Line, Pie, Bar, Doughnut } from 'react-chartjs-2';
import './GD.css';

class GeneralData extends React.Component {

    state = {
        barData1: {},
        barData2: {},
        width: 500,
        height: 350
    }

    getGeneralData = async (e) => {
        if (e) e.preventDefault();
        const api_call = await fetch(`http://localhost:3000/generaldata`);
        if (api_call.ok) {
            const data = await api_call.json();
            console.log(data);
            const map1 = [];
            const map2 = [];
            const map3 = [];
            const map4 = [];
            for (let i = 0; i < data.query10.length; i++) {
                map1[i] = data.query10[i].percentage;
            }
            for (let i = 0; i < data.query10.length; i++) {
                map2[i] = data.query10[i].productcategory;
            }
            for (let i = 0; i < data.query11.length; i++) {
                map3[i] = data.query11[i].working_hour;
            }
            for (let i = 0; i < data.query11.length; i++) {
                map4[i] = data.query11[i].total_earnings;
            }
            this.setState({
                barData1: {
                    labels: map2,
                    datasets: [{
                        label: 'Percentage of shop branded products prefered over other brands',
                        data: map1,
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
                    labels: map3,
                    datasets: [{
                        label: 'Hours with most money spent per person (in Euros) ',
                        data: map4,
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

    componentDidMount() {
        this.getGeneralData();
    }

    render() {
        return (
            <div>
                < Container >
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
            </div >
        )
    }
}

export default GeneralData;