import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Col, Row, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Route, Link, Redirect } from 'react-router-dom';
import User_1 from './Users/User_1';
import Form from 'react-bootstrap/Form';
import './BU.css';

class BrowseUsers extends React.Component {

    state = {
        redirect: false,
        page: undefined
    }

    getUser = async (e) => {
        if (e) e.preventDefault();
        const user = e.target.elements.user.value;
        const user2 = parseInt(user, 10);
        console.log('prin skata');
        const api_call = await fetch(`http://localhost:3000/users`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ tempcard: user })
            });
        console.log('skata');
        if (api_call.ok) {
            console.log('dyo skata');
            const data = await api_call.json();
            console.log(data);
        }
        this.setState({
            redirect: true,
            page: user
        })
        console.log(user);
    }

    render() {
        const redirect = this.state.redirect;
        const user1 = this.state.page;
        if (redirect === true) {
            return (<Redirect to='/users/user1' />)
        } else {
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
                </div>
            )
        }
    }
}

export default BrowseUsers;