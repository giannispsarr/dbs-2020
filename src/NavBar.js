import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarBrand } from 'react-bootstrap';

const check1 = false;

function handleClick(e) {
    e.preventDefault();
    check1 = true;
}

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand exact href="/">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link exact href="/transactions">Browse Transactions</Nav.Link>
                        <Nav.Link exact href="/users">Users</Nav.Link>
                        <Nav.Link exact href="/data">Edit Products</Nav.Link>
                        <Nav.Link exact href="/general">General Data</Nav.Link>
                        <Nav.Link exact href="/per_store">Data Per Store</Nav.Link>
                    </Nav>
                </Navbar>
            </div >
        )
    }
}

export default NavBar;