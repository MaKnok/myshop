import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";




class FormProducts3 extends Component {
    state = {  }

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    goback = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() { 

        const {values: { productCategory, productBrand, productType, productName, productPrice, productCode, productDescription}} = this.props;
        const {toCurrency} = this.props;

        return ( 
            <React.Fragment>

            <Form>

                <ListGroup variant="flush">

                    <ListGroup.Item>Categoria do Produto: {productCategory} </ListGroup.Item>

                    <ListGroup.Item>Marca do Produto: {productBrand} </ListGroup.Item>

                    <ListGroup.Item>Tipo do Produto: {productType}</ListGroup.Item>

                    <ListGroup.Item>Nome do Produto: {productName}</ListGroup.Item>

                    <ListGroup.Item>Preço do Produto: R$ {toCurrency(productPrice)}</ListGroup.Item>

                    <ListGroup.Item>Código do Produto: {productCode}</ListGroup.Item>

                    <ListGroup.Item>Descrição: {productDescription}</ListGroup.Item>

                </ListGroup>
            
                <Form.Group controlId="buttonsCategory" style={this.formatForm}>

                    <Button variant="secondary m-2" style={this.styleAddButton} onClick={this.goback}>
                        Voltar
                    </Button>

                    <Button variant="primary" type="submit" style={this.styleAddButton} onClick={this.continue}>
                        Confirmar
                    </Button>

                </Form.Group>
           
            </Form>

            </React.Fragment>

        );
    }
}
 
export default FormProducts3;