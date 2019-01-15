import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        );
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Joel</td>
                <td>Web Dev</td>
            </tr>
            <tr>
                <td>Jen</td>
                <td>Reception</td>
            </tr>
            <tr>
                <td>Rob</td>
                <td>Manager</td>
            </tr>
            <tr>
                <td>Heidi</td>
                <td>Manager</td>
            </tr>
        </tbody>
    );
}

export default Table;