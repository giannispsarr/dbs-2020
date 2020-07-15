import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class View1 extends React.Component {

    state = {
        age: [],
        bdate: [],
        card_id: [],
        city: [],
        email: [],
        fname: [],
        gender: [],
        lname: [],
        phone: [],
        pstcode: [],
        reward_credits: [],
        ssn: [],
        stnumber: [],
        street: []
    }

    getViewCustomers = async (e) => {
        if (e) e.preventDefault();
        const api_call = await fetch(`http://localhost:3000/viewcustomers`);
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
            const map13 = [];
            const map14 = [];
            for (let i = 0; i < data.length; i++) {
                map1[i] = data[i].age;
                map2[i] = data[i].birthdate;
                map3[i] = data[i].card_id;
                map4[i] = data[i].city;
                map5[i] = data[i].email;
                map6[i] = data[i].fname;
                map7[i] = data[i].gender;
                map8[i] = data[i].lname;
                map9[i] = data[i].phone;
                map10[i] = data[i].pstcode;
                map11[i] = data[i].reward_credits;
                map12[i] = data[i].ssn;
                map13[i] = data[i].stnumber;
                map14[i] = data[i].street;
            }
            this.setState({
                age: map1,
                bdate: map2,
                card_id: map3,
                city: map4,
                email: map5,
                fname: map6,
                gender: map7,
                lname: map8,
                phone: map9,
                pstcode: map10,
                reward_credits: map11,
                ssn: map12,
                stnumber: map13,
                street: map14
            })
        }
    }

    componentDidMount() {
        this.getViewCustomers();
    }

    renderCustomer = (index) => {
        return (
            <tr key={index}>
                <td>{this.state.fname[index]}</td>
                <td>{this.state.lname[index]}</td>
                <td>{this.state.age[index]}</td>
                <td>{this.state.bdate[index]}</td>
                <td>{this.state.city[index]}</td>
                <td>{this.state.stnumber[index]}</td>
                <td>{this.state.street[index]}</td>
                <td>{this.state.pstcode[index]}</td>
                <td>{this.state.gender[index]}</td>
                <td>{this.state.phone[index]}</td>
                <td>{this.state.email[index]}</td>
                <td>{this.state.ssn[index]}</td>
                <td>{this.state.card_id[index]}</td>
                <td>{this.state.reward_credits[index]}</td>
            </tr>
        )
    }

    render() {
        let customerArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
        return (
            <div>
                <Table striped bordered hover responsive sm>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Birth date</th>
                            <th>City</th>
                            <th>Street Number</th>
                            <th>Street</th>
                            <th>Postal Code</th>
                            <th>Gender</th>
                            <th>Phone</th>
                            <th>E-mail</th>
                            <th>SSN</th>
                            <th>Card ID</th>
                            <th>Reward Credits</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerArray.map(this.renderCustomer)}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default View1;