import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap'
import { Route, Link } from 'react-router-dom';
import Shop_1 from './Shops/Shop_1';
import Shop_2 from './Shops/Shop_2';
import Shop_3 from './Shops/Shop_3';
import Shop_4 from './Shops/Shop_4';
import Shop_5 from './Shops/Shop_5';
import Shop_6 from './Shops/Shop_6';
import Shop_7 from './Shops/Shop_7';
import Shop_8 from './Shops/Shop_8';
import Shop_9 from './Shops/Shop_9';
import Shop_10 from './Shops/Shop_10';
import './BTD.css';


class BrowseTransctionData extends React.Component {
    render() {
        return (
            <div>
                <DropdownButton variant="success" bsPrefix='dropbtn' id="dropdown-basic-button" title="Select Shop">
                    <Dropdown.Item href="/transactions/shop1">Shop #1</Dropdown.Item>
                    <Dropdown.Item href="/transactions/shop2">Shop #2</Dropdown.Item>
                    <Dropdown.Item href="/transactions/shop3">Shop #3</Dropdown.Item>
                    <Dropdown.Item href="/transactions/shop4">Shop #4</Dropdown.Item>
                    <Dropdown.Item href="/transactions/shop5">Shop #5</Dropdown.Item>
                    <Dropdown.Item href="/transactions/shop6">Shop #6</Dropdown.Item>
                    <Dropdown.Item href="/transactions/shop7">Shop #7</Dropdown.Item>
                    <Dropdown.Item href="/transactions/shop8">Shop #8</Dropdown.Item>
                    <Dropdown.Item href="/transactions/shop9">Shop #9</Dropdown.Item>
                    <Dropdown.Item href="/transactions/shop10">Shop #10</Dropdown.Item>
                </DropdownButton>
            </div>
        )
    }
}

export default BrowseTransctionData;