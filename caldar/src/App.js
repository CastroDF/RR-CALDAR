//import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

//const boilerTypes = require('controllers/boiler-types.js');
//import AddBoilerType from './components/addBoilerType/AddBoilerType.js';
//import BoilerTypeId from './components/boilerTypeId/BoilerTypeId.js';
import data from './data/boiler-types.js';
//const mongoose = require('mongoose');
//const BoilerTypes = require('./models/boiler-types.js')(mongoose);

class App extends React.Component{

  state = {
    data: data,
    form:{
      id: '',
      skillId:'',
      description:'',
      stock:0
    },
    modalInsert: false,
  }

  handleChange=e=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  }
  /* insert=()=> {
    var newboilertype = {...this.state.form};
    newboilertype.id = this.state.data.length+1;
    var list = this.state.data;
    list.push(newboilertype);
    this.setState({data: list});
  }
 */
  showModal=()=>{
    this.setState({modalInsert: true});
  }

  hideModal=()=>{
    this.setState({modalInsert: false});
  }

  render(){
    return(
      <>
      <Container className="container">
        <Button color="success" onClick={ ()=> this.showModal()} >New Boiler Type</Button>
        <Table className="table-container">
          <thead>
            <tr>
              <th>Id</th>
              <th>description</th>
              <th>Stock</th>
              <th>acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((elemento)=>(
              <tr>
                <td>{elemento.id}</td>
                <td>{elemento.description}</td>
                <td>{elemento.stock}</td>
                <td>
                  <Button color="primary">Edit</Button>
                  <Button color="danger">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <Modal isOpen={this.state.modalInsert}>
        <ModalHeader>
          <div>
            <h1>New Boiler Type</h1>
          </div>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
              <input className="form-control" readOnly type="text" value={this.state.data.length+1}/>
          </FormGroup>
          <FormGroup>
              <input className="form-control" name="skillId" type="text" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
              <input className="form-control" name="description" type="text" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
              <input className="form-control" name="stock" type="text" onChange={this.handleChange}/>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button>Add</Button>
          <Button onClick={()=>this.hideModal()}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </>
    )
  }
}


export default App;

