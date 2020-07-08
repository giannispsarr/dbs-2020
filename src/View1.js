import React, { Component } from 'react';

class View1 extends React.Component {

    getViewCustomers = async (e) => {
        if (e) e.preventDefault();
        const api_call = await fetch(`http://localhost:3000/viewcustomers`);
        if (api_call.ok) {
            const data = await api_call.json();
            console.log(data);
        }
    }

    componentDidMount() {
        this.getViewCustomers();
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default View1;