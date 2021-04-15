import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import NewShipping from './newShippingComponent';

import {
    BrowserRouter as Router,
    Route, 
    Link, 
  } from "react-router-dom";

class Shipping extends Component {
    state = { 
        sectionName:'Entregas',
        newShippingLabel:'Pedido processado! Você tem uma nova entrega.' 
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
            
                    <React.Fragment>
        
                    <div>
                        <span style={this.styleTitle} className="text-primary m-4">{this.state.sectionName}</span>
                        <Router>
                            <Link to="/newshipping"><button style={this.styleAddButton} className="btn btn-primary btn-sm">{this.state.newShippingLabel}</button></Link>
                            <Route path="/newshipping" component={NewShipping} />
                        </Router>
           
                    </div>
        
                   </React.Fragment>
            
        );
    }
}
 
export default Shipping;