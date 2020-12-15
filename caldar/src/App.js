//import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';

import data from './data/boiler-types.js';
import ListBoilerTypes from './components/listBoilerTypes/ListBoilerTypes.js';
import AddBoilerType from './components/addBoilerType/AddBoilerType.js';
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


  showModal=()=>{
    this.setState({modalInsert: true});
  }

  hideModal=()=>{
    this.setState({modalInsert: false});

  }

  render(){
    console.log(this.state.modalInsert);
    return(
      <>
      <Container className="container">
        <Button color="success" onClick={ ()=> this.showModal()} >New Boiler Type</Button>
        <ListBoilerTypes key="" listboilertypes={this.state.data}/>
      </Container>
      <Modal isOpen={this.state.modalInsert}>
        <ModalHeader>
          <div>
            <h1>New Boiler Type</h1>
          </div>
        </ModalHeader>
        <ModalBody>
          <AddBoilerType data={this.state.data} form={this.state.form} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={()=>this.hideModal()}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </>
    )
  }
}


export default App;

