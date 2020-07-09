import React, { Component } from 'react';

class View2 extends React.Component {

    state = {
        product_category: [],
        store_id: [],
        total_units_sold: []
    }

    getViewSellings = async (e) => {
        if (e) e.preventDefault();
        const api_call = await fetch(`http://localhost:3000/viewsellings`);
        if (api_call.ok) {
            const data = await api_call.json();
            console.log(data);
            const map1 = [];
            const map2 = [];
            const map3 = [];
            for (let i = 0; i < data.length; i++) {
                map1[i] = data[i].product_category;
                map2[i] = data[i].store_id;
                map3[i] = data[i].total_units_sold;
            }
            this.setState({
                product_category: map1,
                store_id: map2,
                total_units_sold: map3
            })
        }
    }

    componentDidMount() {
        this.getViewSellings();
    }

    renderSell = (index) => {
        return (
            <tr key={index}>
                <td>{this.state.product_category[index]}</td>
                <td>{this.state.store_id[index]}</td>
                <td>{this.state.total_units_sold[index]}</td>
            </tr>
        )
    }

    render() {
        let sellArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56];
        return (
            <div>
            </div>
        )
    }
}

export default View2;

/*<Table striped bordered hover responsive sm>
                    <thead>
                        <tr>
                            <th>Product Category</th>
                            <th>Store ID</th>
                            <th>Total Units Sold</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellArray.map(this.renderSell)}
                    </tbody>
                </Table>*/