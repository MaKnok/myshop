import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

class NewCarShipping extends Component {
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

           

                <Form.Group controlId="formCar.ShippingCar">
                        <Form.Label>Selecione a marca do carro</Form.Label>
                        <Form.Control as="select">
                            <option>Marca 1</option>
                            <option>Marca 2</option>
                            <option>Marca 3</option>
                            <option>Marca 4</option>
                            <option>Marca 5</option>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId="formLicensePlate">
                    <Form.Label>Placa do Carro</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="formDriverName">
                    <Form.Label>Nome do Motorista</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="formShippingCarCode">
                    <Form.Label>Código do Carro de Entrega</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

               
                <Form.Group controlId="buttonsCategory" style={this.formatForm}>
                    <Button variant="secondary m-2" type="reset" style={this.styleAddButton}>
                        Limpar
                    </Button>

                    <Button variant="primary" type="submit" style={this.styleAddButton}>
                       + Adicionar Carro de Entrega
                    </Button>
                </Form.Group>

               
            </Form>
        </div>
        
        );
    }
}
 
export default NewCarShipping;