import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';


class FormProducts2 extends Component {

    state = { 
            name:'',
            price:0,
            code:'',
            description:'' 
        }
    
    
    validate = () => {
    
            let productName = this.props.values.productName;
            let productPrice = this.props.values.productPrice;
            let productCode = this.props.values.productCode;
            let productDescription = this.props.values.productDescription;
    
            if (productName == ''){
                alert('Escolha um nome para o seu produto');      
                return false   
    
            } else if (productName.length < 3){
                alert('O nome produto precisa ter pelo menos 3 caracteres');      
                return false  

            } else if (productPrice == 0){
                alert('O produto precisa ter um preço');      
                return false  

            } else if (productCode == ''){
                alert('O produto precisa ter um código');      
                return false  
                 
            } else if (productDescription == ''){
                alert('O produto precisa ter uma descrição');      
                return false  
                 
            }
            return true
    };
    

    continue = e =>{
        e.preventDefault();
       
        const isValid = this.validate();
        console.log(this.props.values.productName);
        console.log(this.props.values.productPrice);
        console.log(this.props.values.productCode);
        console.log(this.props.values.productDescription);


        if (isValid){
        this.props.nextStep();
        } 
    }

    goback = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    reset = () => {
        this.props.handleReset2();
    }


    render() { 

        const {values, handleChange,  toCurrency} = this.props;

        return ( 
            <React.Fragment>
            
            <Form>
            
                <Form.Group controlId="formProductName">
                    <Form.Label>Nome do Produto</Form.Label>
                    <Form.Control type="text" onChange={handleChange('productName')} value={values.productName}/>               
                </Form.Group>
           
                
                <Form.Group controlId="formProductPrice">
                    <Form.Label>Preço do Produto</Form.Label>
                    <Form.Control type="number" value={toCurrency(values.productPrice)}  
                    onChange={handleChange('productPrice')}/> 
                    
                </Form.Group>

                <Form.Group controlId="formProductPrice">
                    <Form.Label>Código do Produto</Form.Label>
                    <Form.Control type="text" onChange={handleChange('productCode')} value={values.productCode}/>
                </Form.Group>

                <Form.Group controlId="formProductTypesOptions" style={this.formatForm}>
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Descreva as principais características do produto aqui" 
                    onChange={handleChange('productDescription')} value={values.productDescription}/>
                </Form.Group>

                <Form.Group controlId="buttonsCategory" style={this.formatForm}>
                    <Button variant="secondary m-2" type="reset" style={this.styleAddButton} onClick={this.reset}>
                        Limpar
                    </Button>

                    <Button variant="secondary m-2" style={this.styleAddButton} onClick={this.goback}>
                        Voltar
                    </Button>

                    <Button variant="primary" type="submit" style={this.styleAddButton} onClick={this.continue}>
                      Continuar
                    </Button>
                </Form.Group>
               
            </Form>
        </React.Fragment>

        );
    }
}
 
export default FormProducts2;