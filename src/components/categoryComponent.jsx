import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import NewCategory from './newCategoryComponent';

import {
    BrowserRouter as Router,
    Route, 
    Link, 
  } from "react-router-dom";


class Category extends Component {
    state = {  
        sectionName:'Categorias',
        addButtonLabel:'+ Adicionar Categoria' 
    };

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
                    <Link to="/newcategory"><button style={this.styleAddButton} className="btn btn-primary btn-sm" onClick={this.openModal} >{this.state.addButtonLabel}</button> </Link>
                    <Route path="/newcategory" component={NewCategory} />
                </Router> 
            </div>

           
            

        </React.Fragment>
        );
    }
}
 
export default Category;