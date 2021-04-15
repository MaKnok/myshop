import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

class NewShipping extends Component {

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
            <div>
                <div>
                    <p>Código do Pedido: {}</p>
                </div>

            </div>

            <div>
                <div>
                    <p>Código do Produto: {}</p>
                </div>
            </div>

            <div>

                <div>
                    <p>Valor Total: {}</p>
                </div>

                <div>
                    <p>CEP: {}</p>
                </div>

                <div>
                    <p>Endereço: {}</p>
                </div>

                <div>
                    <p>E-mail: {}</p>
                </div>

                <div>
                    <p>Celular: {}</p>
                </div>

                <div>
                    <p>Data do Pedido: {}</p>
                </div>

                <div>
                    <p>Prazo: {}</p>
                </div>

                <div>
                    <p>Código da Entrega: {}</p>
                </div>

                <div>
                    <p>Código do Carro: {}</p>
                </div>
            
            </div>


        </div>
         );
    }
}
 
export default NewShipping;