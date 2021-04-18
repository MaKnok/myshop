import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import {ErrorMessage, Formik, validateYupSchema} from "formik";
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import PropTypes from 'prop-types';


const schema = yup.object().shape({
    productName: yup.string().required('Escolha um nome para o seu produto.'),
    productPrice: yup.number().min(1,'O produto precisa ter um valor a partir de R$ 1,00'),
    productCode: yup.string().required('O produto precisa do código de identificação.'),
    productDescription: yup.string().required('O produto precisa de uma breve descrição.')
});

class FormProducts2 extends Component {

    goback = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    reset = () => {
        this.props.handleReset2();
    }

    continue = values => {
        this.props.nextStep();
    }

    render() { 

        const {values, handleChange,  toCurrency} = this.props;

        return ( 
            <Formik
            enableReinitialize
            validateOnChange={false}
            validateOnBlur={false}
            initialValues = {{
                productName: values.productName,
                productPrice: values.productPrice,
                productCode: values.productCode,
                productDescription: values.productDescription
            }}

             validationSchema = {schema}

             onSubmit = {  
               (values, {setSubmitting} )=> {
                   setSubmitting(true);
                   this.continue();
                   setSubmitting(false);
                   console.log(values)
               }
             }
            >
            {({ 
              handleSubmit,  
              handleBlur,
              touched,
              isInvalid, //defines what is invalid
              errors //catch up the errors to be displayed
              }) => ( 
              <Form onSubmit={handleSubmit}>
                
                  <Form.Group controlId="formProductName">
                    <Form.Label>Nome do Produto</Form.Label>
                    <Form.Control type="text" onChange={handleChange('productName')} value={values.productName}
                    isInvalid={touched.productName && errors.productName}/>  
                    <Form.Control.Feedback type="invalid">{errors.productName}</Form.Control.Feedback>             
                </Form.Group>
           
                
                <Form.Group controlId="formProductPrice">
                    <Form.Label>Preço do Produto</Form.Label>
                    <Form.Control type="number" value={toCurrency(values.productPrice)}  
                    onChange={handleChange('productPrice')}  isInvalid={touched.productPrice && errors.productPrice}/> 
                     <Form.Control.Feedback type="invalid">{errors.productPrice}</Form.Control.Feedback>  
                </Form.Group>

                <Form.Group controlId="formProductPrice">
                    <Form.Label>Código do Produto</Form.Label>
                    <Form.Control type="text" onChange={handleChange('productCode')} value={values.productCode} 
                    isInvalid={touched.productCode && errors.productCode}/>
                    <Form.Control.Feedback type="invalid">{errors.productCode}</Form.Control.Feedback> 
                </Form.Group>

                <Form.Group controlId="formProductTypesOptions" style={this.formatForm}>
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Descreva as principais características do produto aqui" 
                    onChange={handleChange('productDescription')} value={values.productDescription}  isInvalid={touched.productDescription && errors.productDescription}/>
                    <Form.Control.Feedback type="invalid">{errors.productDescription}</Form.Control.Feedback> 
                </Form.Group>
                
                <Form.Group controlId="buttonsCategory" style={this.formatForm}>

                    <Button variant="secondary m-2" style={this.styleAddButton} onClick={this.goback}>
                        Voltar
                    </Button>

                    <Button variant="secondary m-2" type="reset" style={this.styleAddButton} onClick={this.reset}>
                        Limpar
                    </Button>

                    <Button variant="primary" type="submit" style={this.styleAddButton}>
                       Continuar
                    </Button>
                </Form.Group>
               
              </Form>  
                    
              )}      

            </Formik>

        );
    }
}
 
export default FormProducts2;