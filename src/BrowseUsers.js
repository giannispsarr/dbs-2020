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
                                <option>User 1</option>
                                <option>User 2</option>
                                <option>User 3</option>
                                <option>User 4</option>
                                <option>User 5</option>
                                <option>User 6</option>
                                <option>User 7</option>
                                <option>User 8</option>
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