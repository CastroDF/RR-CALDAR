import React, { Component } from "react";
import "./BoilerTypeId.css";
//import { Timestamp } from "mongodb";
import datos from '../../data/boiler-types.js';

console.log(datos);

export class BoilerTypeId extends Component{
    state = {
        boilertype: datos
    }

    handleDelete = () => this.props.delBoilerType(this.props.boilertype.id)
    handleEdit = () => this.props.editBoilerType(this.props.boilertype.id)
    render () {
        const { id, skillId, description, stock } = this.boilertype;
        return (
            <div>
                <table>
                {this.state.boilertype.map(e =>
                    <tr>
                        <td>key={e.id}</td>
                        <td>skillid={e.skillId}</td>
                        <td>description={e.description}</td>
                        <td>stock={e.stock}</td>
                        <button onclick={this.handleEdit} className="edit-btn">Edit</button>
                        <button onclick={this.handleDelete} className="delete-btn">Delete</button>
                    </tr>
                )}
                </table>
            </div>
        )
    }
}
export default BoilerTypeId;