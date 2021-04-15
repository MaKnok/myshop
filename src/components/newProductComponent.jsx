import React, { Component } from 'react';
import FormProducts1 from './formProducts1';
import FormProducts2 from './formProducts2';
import FormProducts3 from './formProducts3';
import FormProductsSuccess from './formProductsSuccess';
import PropTypes from "prop-types";

class NewProduct extends Component {

    state = { 
        step:1,
        productCategory:'',
        productBrand:'',
        productType:'',
        productName:'',
        productPrice:0,
        productCode:'',
        productDescription:''
    }

    formatForm = {
        marginTop:15
    };

    styleAddButton = {
        fontSize:15,
        fontWeight:"bold"
    };

    //Proceed to the next step
    nextStep = () => {
        const {step} = this.state
        this.setState({
            step: step + 1
        });
    }

    //Go back to previous step <div>
    
    prevStep = () => {
        const {step} = this.state
        this.setState({
            step: step - 1
        });
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    toCurrency(number) {
        const formatter = new Intl.NumberFormat("pt-BR", {
          style: "decimal",
          currency: "BRL"
        });
    
        return formatter.format(number);
    }


    handleReset1 = () => {
        this.setState({
            productCategory:'',
            productBrand:'',
            productType:''
        });
    }

    handleReset2 = () => {
        this.setState({
            productName:'',
            productPrice:0,
            productCode:'',
            productDescription:''
        });
    }

    render() { 
        
        const {step} = this.state;
        const {productCategory, productBrand, productType, productName, productPrice, productCode, productDescription} = this.state;
        const values = {productCategory, productBrand, productType, productName, productPrice, productCode, productDescription};
 

        switch(step){
            case 1:
                return (
                    <FormProducts1 nextStep = {this.nextStep}
                    handleChange = {this.handleChange} handleReset1 = {this.handleReset1}
                    values={values}
                    />
                )
            case 2:
                return(
                    <FormProducts2 nextStep = {this.nextStep}
                    prevStep = {this.prevStep} handleChange = {this.handleChange}
                    handleReset2 = {this.handleReset2} 
                    values={values} toCurrency = {this.toCurrency}
                    />
                )
            case 3:
                return(
                    <FormProducts3 nextStep = {this.nextStep} prevStep = {this.prevStep}
                    values={values} toCurrency = {this.toCurrency}
                    />
                )
            case 4:
                return(
                    <FormProductsSuccess/>
                )
        }         
        
    }
}

NewProduct.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
  };
 
export default NewProduct;