import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import NewProduct from './newProductComponent';

import {
    BrowserRouter as Router,
    Route, 
    Link, 
  } from "react-router-dom";


class Products extends Component {

    state = { 
        sectionName:'Produtos',
        addButtonLabel:'+ Adicionar Produto' 
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
                    <Link to="/newproduct"><button style={this.styleAddButton} className="btn btn-primary btn-sm" onClick={this.openModal} >{this.state.addButtonLabel}</button></Link>
                    <Route path="/newproduct" component={NewProduct} />
                </Router>
   
            </div>

           </React.Fragment>
        );
    }
}
 
export default Products;