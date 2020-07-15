import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Col, Row, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './BTD.css';
import './Shop_1.css';


class BrowseTransctionData extends React.Component {

    state = {
        name: [],
        payment_way: [],
        prcat: [],
        stid: [],
        timetransc: [],
        total_cost: [],
        total_quantity: [],
        array: []
    }

    getTransactionData = async (e) => {
        if (e) e.preventDefault();
        const storeid = parseInt(e.target.elements.shopid.value, 10);
        const minquan = parseInt(e.target.elements.ub1.value, 10);
        const maxquan = parseInt(e.target.elements.ub2.value, 10);
        const mintot_cost = parseInt(e.target.elements.ta1.value, 10);
        const maxtot_cost = parseInt(e.target.elements.ta2.value, 10);
        const tempcate = e.target.elements.category.value;
        const payway = e.target.elements.payment.value;
        const fday = e.target.elements.fday.value;
        const fmonth = e.target.elements.fmonth.value;
        const fyear = e.target.elements.fyear.value;
        const tday = e.target.elements.tday.value;
        const tmonth = e.target.elements.tmonth.value;
        const tyear = e.target.elements.tyear.value;
        const mindate = `${fyear}-${fmonth}-${fday}`;
        const maxdate = `${tyear}-${tmonth}-${tday}`;
        console.log(storeid);
        console.log(minquan);
        console.log(maxquan);
        console.log(mintot_cost);
        console.log(maxtot_cost);
        console.log(tempcate);
        console.log(payway);
        console.log(mindate);
        console.log(maxdate);
        const api_call = await fetch('http://localhost:3000/transactions',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ storeid: storeid },
                    { minquan: minquan },
                    { maxquan: maxquan },
                    { mintot_cost: mintot_cost },
                    { maxtot_cost: maxtot_cost },
                    { tempcate: tempcate },
                    { payway: payway },
                    { mindate: mindate },
                    { maxdate: maxdate })
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
            const map7 = [];
            const map8 = [];
            for (let i = 0; i < data.length; i++) {
                map1[i] = data[i].name;
                map2[i] = data[i].payment_way;
                map3[i] = data[i].prcat;
                map4[i] = data[i].stid;
                map5[i] = data[i].timetransc;
                map6[i] = data[i].total_cost;
                map7[i] = data[i].total_quantity;
                map8[i] = i;
            }
            this.setState({
                name: map1,
                payment_way: map2,
                prcat: map3,
                stid: map4,
                timetransc: map5,
                total_cost: map6,
                total_quantity: map7,
                array: map8
            })
        }
    }

    renderTransactions = (index) => {
        return (
            <tr key={index}>
                <td>{this.state.name[index]}</td>
                <td>{this.state.payment_way[index]}</td>
                <td>{this.state.prcat[index]}</td>
                <td>{this.state.stid[index]}</td>
                <td>{this.state.timetransc[index]}</td>
                <td>{this.state.total_cost[index]}</td>
                <td>{this.state.total_quantity[index]}</td>
            </tr>
        )
    }

    render() {
        let transactionArray = this.state.array;
        return (
            <div>
                <Row>
                    <Col>
                        <Form onSubmit={this.getTransactionData}>
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
                            <Form.Group bsPrefix='group1'>
                                <Form.Row>
                                    <Form.Label>Quantity:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='minimun quantity' name='ub1' />
                                    </Col>
                                    <Col>
                                        <FormControl placeholder='maximum quantity' name='ub2' />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group bsPrefix='group1'>
                                <Form.Row>
                                    <Form.Label>Total Cost:</Form.Label>
                                    <Col>
                                        <FormControl placeholder='minimun cost' name='ta1' />
                                    </Col>
                                    <Col>
                                        <FormControl placeholder='maximum cost' name='ta2' />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1" bsPrefix='category'>
                                <Form.Label>Product Category</Form.Label>
                                <Form.Control as="select" name='category'>
                                    <option>Προϊόντα Ψυγείου</option>
                                    <option>Είδη Σπιτιού</option>
                                    <option>Κάβα</option>
                                    <option>Κατοικίδια</option>
                                    <option>Φρέσκα Προϊόντα</option>
                                    <option>Προσωπικής Περιποίησης</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group bsPrefix='group2'>
                                <Form.Row>
                                    <Form.Label as="legend" column sm={2}>
                                        Paid with:
                        </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control as="select" name='payment'>
                                            <option>card</option>
                                            <option>cash</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group bsPrefix='group2'>
                                <Form.Label>From:</Form.Label>
                                <Form.Row>
                                    <Col>
                                        <Form.Control bsPrefix='datecell' placeholder="Day" name='fday' />
                                    </Col>
                        /
                        <Col>
                                        <Form.Control bsPrefix='datecell' placeholder="Month" name='fmonth' />
                                    </Col>
                        /
                        <Col>
                                        <Form.Control bsPrefix='datecell' placeholder="Year" name='fyear' />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group bsPrefix='group2'>
                                <Form.Label>To:</Form.Label>
                                <Form.Row>
                                    <Col>
                                        <Form.Control bsPrefix='datecell' placeholder="Day" name='tday' />
                                    </Col>
                        /
                        <Col>
                                        <Form.Control bsPrefix='datecell' placeholder="Month" name='tmonth' />
                                    </Col>
                        /
                        <Col>
                                        <Form.Control bsPrefix='datecell' placeholder="Year" name='tyear' />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Button variant="success" bsPrefix='button' type="submit">Submit</Button>
                        </Form>
                    </Col>
                    <Col>
                        <Table striped bordered hover responsive sm>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Payment</th>
                                    <th>Category</th>
                                    <th>Store</th>
                                    <th>Transaction Timestamp</th>
                                    <th>Total Cost</th>
                                    <th>Total quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactionArray.map(this.renderTransactions)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default BrowseTransctionData;