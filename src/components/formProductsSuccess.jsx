import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";



class FormProductsSuccess extends Component {
    state = {  }

    render() { 

        const {values} = this.props;

        return ( 
        <React.Fragment>
           <h1>Produto adicionado com sucesso!!</h1>
           <p>O produto já se encontra na sua base de dados 
           </p>
        </React.Fragment>

        );
    }
}
 
export default FormProductsSuccess;