import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import NewCarShipping from './newCarShippingComponent';

import {
    BrowserRouter as Router,
    Route, 
    Link, 
  } from "react-router-dom";

class CarShipping extends Component {
    state = { 
        sectionName:'Carros de Entrega',
        addButtonLabel:'+ Adicionar Carro de Entrega' 
    }

    styleTitle = {
        fontSize:25,
        fontWeight:"bold"
    };

    styleAddButton = {
        fontSize:15,
        fontWeight:"bold"
    };

    render() { 
        return (  
            <div>
                <span style={this.styleTitle} className="text-primary m-4">{this.state.sectionName}</span>
                <Router>
                    <Link to="/newcarshipping"><button style={this.styleAddButton} className="btn btn-primary btn-sm" >{this.state.addButtonLabel}</button> </Link>
                    <Route path="/newcarshipping" component={NewCarShipping} />
                </Router> 
            </div>
        );
    }
}
 
export default CarShipping;