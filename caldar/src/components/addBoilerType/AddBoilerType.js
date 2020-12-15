import React, { Component } from "react";
import "./AddBoilerType.css";
//import { Timestamp } from "mongodb";
import datos from '../../data/boiler-types.js';

export class AddBoilerType extends Component{
    state = {
        boilertype: datos
    }

onsubmit = (e) => {
    e.preventDefault();
    this.props.AddBoilerType(this.state);
    this.setState({id: ''});
    this.setState({skillId: ''});
    this.setState({description: ''});
    this.setState({stock: ''});
}

render() {
    return (
        <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
            <input type="num" name="id" placeholder="Id" value={this.state.id}/>
            <input type="num" name="skillid" placeholder="Skill Id" value={this.state.skillId}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description}/>
            <input type="num" name="stock" placeholder="stock" value={this.state.stock}/>
            <input type="submit" value="Add" className="btn" style={{flex:'1'}}/>
        </form>
    )
}
}
export default AddBoilerType;