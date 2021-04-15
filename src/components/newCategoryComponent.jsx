import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

class NewCategory extends Component {

    state = {  }

    formatForm = {
        marginTop:15
    };

    styleAddButton = {
        fontSize:15,
        fontWeight:"bold"
    };


    render() { 
        return ( 
            <div>
                <Form>

                    <Form.Group controlId="formCategoryName">
                    <Form.Label>Nome da Categoria</Form.Label>
                    <Form.Control type="text" placeholder="Escolha um nome para essa Categoria" />
                    </Form.Group>
                
                    <Form.Group controlId="formBrandsOptions" style={this.formatForm}>
                    <Form.Label>Marcas disponíveis</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Digite as marcas disponíveis separadas por vírgula"/>
                    </Form.Group>
                  
                    <Form.Group controlId="formProductTypesOptions" style={this.formatForm}>
                    <Form.Label>Produtos disponíveis</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Digite os tipos de produtos disponíveis separados por vírgula" />
                    </Form.Group>
               
                    <Form.Group controlId="buttonsCategory" style={this.formatForm}>
                        <Button variant="secondary m-2" type="reset" style={this.styleAddButton}>
                            Limpar
                        </Button>

                        <Button variant="primary" type="submit" style={this.styleAddButton}>
                           + Adicionar Categoria
                        </Button>
                    </Form.Group>

                   
                </Form>
            </div>
            
         );
    }
}
 
export default NewCategory;