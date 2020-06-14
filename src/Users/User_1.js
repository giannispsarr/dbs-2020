import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Col, Row, FormControl, Image, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './User_1.css';
import { Line, Pie, Bar, Doughnut } from 'react-chartjs-2';

class User_1 extends React.Component {

    state = {
        barData: {
            labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
            datasets: [{
                label: 'Visiting hours',
                data: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 5, 5, 5, 6, 7, 7, 6, 3, 1],
                //borderColor: 'rgba(3, 0, 4, 1)',
                borderDash: [10, 24],
                backgroundColor: 'rgb(89, 71, 167)',
                pointBackgroundColor: 'rgba(3, 0, 4, 1)',
                pointBorderColor: 'rgba(3, 0, 4, 1)',
                pointHoverBackgroundColor: 'rgba(3, 0, 4, 1)',
                pointHoverBorderColor: 'rgba(3, 0, 4, 1)'
            }]
        },
        width: 500,
        height: 350,
        barData2: {
            labels: ['King Size OCBs', 'Condoms', 'Doughnuts'],
            datasets: [{
                label: 'Most frequently bought products',
                data: [30, 30, 40],
                //borderColor: 'rgba(3, 0, 4, 1)',
                //borderDash: [5, 5],
                backgroundColor: ['rgba(89, 71, 167, 1)', 'rgba(62, 33, 53, 1)', 'rgba(42, 40, 54, 1)'],
                pointBackgroundColor: 'rgba(3, 0, 4, 1)',
                pointBorderColor: 'rgba(3, 0, 4, 1)',
                pointHoverBackgroundColor: 'rgba(3, 0, 4, 1)',
                pointHoverBorderColor: 'rgba(3, 0, 4, 1)'
            }]
        }
    }

    render() {
        return (
            <div>
                <h2>Username</h2>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image bsPrefix='skata' src="https://static.vecteezy.com/system/resources/thumbnails/000/495/460/small/22_Profile.jpg" fluid />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Line data={this.state.barData} width={this.state.width} height={this.state.height}
                            options={{
                                responsive: false,
                                maintainAspectRatio: false
                            }} />
                        <Pie data={this.state.barData2} width={this.state.width} height={this.state.height}
                            options={{
                                responsive: false,
                                maintainAspectRatio: false
                            }} />
                    </Row>
                </Container>
            </div >
        )
    }
}

export default User_1;