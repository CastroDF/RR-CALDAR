import React, { Component } from "react";
import "./AddBoilerType.css";
//import { Timestamp } from "mongodb";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormGroup, Form} from 'reactstrap';
class AddBoilerType extends Component{
/*
onsubmit = (e) => {
    e.preventDefault();
    //this.props.AddBoilerType(this.state);
    this.setState({id: ''});
    this.setState({skillId: ''});
    this.setState({description: ''});
    this.setState({stock: ''});
} */
    /* handleChange=e=>{
    this.setState({
        data: this.props.data,
      form:{
        ...this.props.form,
        [e.target.name]: e.target.value,
      }
    });
  }
   insert=()=> {
    var newboilertype = {...this.props.form};
    newboilertype.id = this.state.data.length+1;
    var list = this.props.data;
    list.push(newboilertype);
    this.setState({data: list});
  } */
render() {
    return (
        <Form  style={{ display: 'flex' }}>
            <FormGroup>
            <input type="num" name="id" placeholder="Id" />
            </FormGroup>
            <FormGroup>
            <input type="text" name="description" placeholder="Description" />
            </FormGroup>
            <FormGroup>
            <input type="num" name="stock" placeholder="stock"/>
            </FormGroup>
            <FormGroup>
            <input type="submit" value="Add" className="btn" />
            </FormGroup>
        </Form>
    )
}
}
export default AddBoilerType;