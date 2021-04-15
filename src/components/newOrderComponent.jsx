import React, { Component } from 'react';

class NewOrder extends Component {
    state = {  }
    render() { 
        return (  
        <div>
            <div>
                <div>
                    <p>Nome do Produto: {}</p>
                </div>

                <div>
                    <p>Valor do Produto: {}</p>
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
                    <p>Código do Pedido: {}</p>
                </div>

                <div>
                    <p>Pago: {}</p>
                </div>

                <div>
                    <p>Cancelado: {}</p>
                </div>
            
            </div>


        </div>
           
            
        );
    }
}
 
export default NewOrder;