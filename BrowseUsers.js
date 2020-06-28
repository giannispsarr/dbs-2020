import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Col, Row, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Route, Link } from 'react-router-dom';
import User_1 from './Users/User_1';
import User_2 from './Users/User_2';
import User_3 from './Users/User_3';
import './BU.css';

class BrowseUsers extends React.Component {

    render() {
        return (
            <div>
                <DropdownButton variant="success" bsPrefix='dropbtn' id="dropdown-basic-button" title="Select User">
                    <Dropdown.Item href="/users/user1">User #1</Dropdown.Item>
                    <Dropdown.Item href="/users/user2">User #2</Dropdown.Item>
                    <Dropdown.Item href="/users/user3">User #3</Dropdown.Item>
                </DropdownButton>
            </div>
        )
    }
}

export default BrowseUsers;