import React, { Component } from 'react';

class View2 extends React.Component {

    getViewSellings = async (e) => {
        if (e) e.preventDefault();
        const api_call = await fetch(`http://localhost:3000/viewsellings`);
        if (api_call.ok) {
            const data = await api_call.json();
            console.log(data);
        }
    }

    componentDidMount() {
        this.getViewSellings();
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default View2;