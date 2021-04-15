import React, { Component } from 'react';
import Home from './home';
import Category from './categoryComponent';
import Product from './productsComponent';
import Orders from './ordersComponent';
import Shipping from './shippingComponent';
import CarShipping from './carShippingComponent';

import {
    BrowserRouter as Router,
    Route, 
    Link, 
} from "react-router-dom";

class MyShop extends Component {
    state = {  
 
    }


    styleAddButton = {
        fontSize:15,
        fontWeight:"bold"
    };

    render() { 
        return (   
        <div>
            <Router>
                <Link to="/"><button style={this.styleAddButton} className="btn btn-primary btn-sm m-2">Visão Geral</button></Link>
                <Link to="/category"><button style={this.styleAddButton} className="btn btn-primary btn-sm m-2">Categoria</button></Link>
                <Link to="/product"><button style={this.styleAddButton} className="btn btn-primary btn-sm m-2">Produto</button></Link>
                <Link to="/orders"><button style={this.styleAddButton} className="btn btn-primary btn-sm m-2">Pedido</button></Link>
                <Link to="/shipping"><button style={this.styleAddButton} className="btn btn-primary btn-sm m-2">Entrega</button></Link>
                <Link to="/carshipping"><button style={this.styleAddButton} className="btn btn-primary btn-sm m-2">Frota</button></Link>
                <Route exact path="/" component={Home} />
                <Route exact path="/category" component={Category} />
                <Route exact path="/product" component={Product} />
                <Route exact path="/orders" component={Orders} />
                <Route exact path="/shipping" component={Shipping} />
                <Route exact path="/carshipping" component={CarShipping} />
            </Router>      
        </div>      
        );
    }

   
        
        
}  

 
export default MyShop;