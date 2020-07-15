import React, { Component } from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { Line, Pie, Bar, Doughnut } from 'react-chartjs-2';
import Table from 'react-bootstrap/Table';
import './GD.css';

class GeneralData extends React.Component {

    state = {
        barData1: {},
        barData2: {},
        barData3: {},
        barData3: {},
        cities: [],
        products: [],
        count: [],
        width: 500,
        height: 350
    }

    getGeneralData = async (e) => {
        if (e) e.preventDefault();
        const api_call = await fetch(`http://localhost:3000/generaldata`);
        if (api_call.ok) {
            const data = await api_call.json();
            const map1 = [];
            const map2 = [];
            const map3 = [];
            const map4 = [];
            const map5 = [];
            const map6 = [];
            const map7 = [];
            const map8 = [];
            const map9 = [];
            const map10 = [];
            const map11 = [];
            const map12 = [];
            const barcodes = [];
            for (let i = 0; i < data.query10.length; i++) {
                map1[i] = data.query10[i].percentage;
                map2[i] = data.query10[i].productcategory;
            }
            for (let i = 0; i < data.query11.length; i++) {
                map3[i] = data.query11[i].working_hour;
                map4[i] = data.query11[i].total_earnings;
            }
            for (let i = 0; i < data.query8.length; i++) {
                map5[i] = data.query8[i].barc1;
                map6[i] = data.query8[i].barc2;
                map7[i] = data.query8[i].counting;
            }
            for (let i = 0; i < data.query8.length; i++) {
                barcodes[i] = `${map5[i]}-${map6[i]}`;
            }
            for (let i = 0; i < data.query15a.length; i++) {
                map8[i] = data.query15a[i].age_range;
                map9[i] = data.query15a[i].total_amount;
            }
            for (let i = 0; i < data.query15b.length; i++) {
                map10[i] = data.query15b[i].city;
                map11[i] = i;
                map12[i] = data.query15b[i].name;
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
                },
                barData3: {
                    labels: barcodes,
                    datasets: [{
                        label: 'Most popular couples of products',
                        data: map7,
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
                    labels: map10,
                    datasets: [{
                        label: 'Most popular couples of products',
                        data: map12,
                        borderColor: 'rgba(3, 0, 4, 1)',
                        borderDash: [20, 20],
                        backgroundColor: 'rgb(89, 71, 167)',
                        pointBackgroundColor: 'rgba(3, 0, 4, 1)',
                        pointBorderColor: 'rgba(3, 0, 4, 1)',
                        pointHoverBackgroundColor: 'rgba(3, 0, 4, 1)',
                        pointHoverBorderColor: 'rgba(3, 0, 4, 1)'
                    }]
                },
                cities: map10,
                products: map12,
                count: map11

            })
        }
    }

    componentDidMount() {
        this.getGeneralData();
    }

    renderData = (index) => {
        return (
            <tr key={index}>
                <td>{this.state.cities[index]}</td>
                <td>{this.state.products[index]}</td>
            </tr>
        )
    }

    render() {
        let dataArray = this.state.count;
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
                            <Table striped bordered hover responsive sm>
                                <thead>
                                    <tr>
                                        <th>City</th>
                                        <th>Product</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataArray.map(this.renderData)}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div >
        )
    }
}

export default GeneralData;