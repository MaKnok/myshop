import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import {ErrorMessage, Formik, validateYupSchema} from "formik";
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import {Categories} from './categoriesList';
import {Brands} from './brandsList';
import {ProductTypes} from './productTypesList';


const schema = yup.object().shape({
    productCategory: yup.string().required('Escolha uma categoria para o seu produto.'),
    productBrand: yup.string().required('Escolha a marca do seu produto.'),
    productType: yup.string().required('Escolha o tipo do seu produto.'),
    });

class FormProducts1 extends Component {

    reset = () => {
        this.props.handleReset1();
    }

    continue = values => {
        this.props.nextStep();
    }

    render() { 

        const {values, handleChange, handleReset1} = this.props;

        const CategoryOptions = Categories,
            MakeItemCategory = function(itemCategory) {
                return <option value={itemCategory.value} key={itemCategory.label}>{itemCategory.label}</option>;
        };

        const BrandOptions = Brands,
            MakeItemBrand = function(itemBrand) {
                return <option value={itemBrand.value} key={itemBrand.label}>{itemBrand.label}</option>;
        };

        const ProductOptions = ProductTypes,
            MakeItemProduct = function(itemProduct) {
                return <option value={itemProduct.value} key={itemProduct.label}>{itemProduct.label}</option>;
        };

        return ( 
            <Formik
            enableReinitialize
            validateOnChange={false}
            validateOnBlur={false}
            initialValues = {{
                productCategory:values.productCategory,
                productBrand:values.productBrand,
                productType:values.productType,
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
                
                <Form.Group as={Col} md="12" controlId="formProduct.ProductCategory">
                    <Form.Label>Categoria do Produto</Form.Label>
                    <Form.Control 
                        name="productCategory" 
                        as="select" 
                        onChange={handleChange('productCategory')} 
                        value={values.productCategory} 
                        onBlur={() => handleBlur('productCategory',true)}
                        isInvalid={touched.productCategory && errors.productCategory}
                        >
                        {CategoryOptions.map(MakeItemCategory)}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{errors.productCategory}</Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group as={Col} md="12" controlId="formProduct.ProductBrand">
                    <Form.Label>Marca do Produto</Form.Label>
                    <Form.Control 
                        name="productBrand" 
                        as="select" 
                        onChange={handleChange('productBrand')} 
                        value={values.productBrand}
                        onBlur = {() => handleBlur('productBrand',true)}
                        isInvalid = {touched.productBrand && errors.productBrand} 
                        > 
                        {BrandOptions.map(MakeItemBrand)}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{errors.productBrand}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="formProduct.ProductType">
                    <Form.Label>Tipo do Produto</Form.Label>
                    <Form.Control 
                        name="productType" 
                        as="select" 
                        onChange={handleChange('productType')} 
                        value={values.productType}
                        onBlur = {() => handleBlur('productType',true)}
                        isInvalid={touched.productType && errors.productType}
                        >
                        {ProductOptions.map(MakeItemProduct)}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{errors.productType}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="buttonsCategory" style={this.formatForm}>
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
 
export default FormProducts1;