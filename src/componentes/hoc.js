import React from 'react';

function hoc(Component) {
    console.log("passando pelo hoc")
    return function Consulta({ isLoading, ...props }) {
        if (!isLoading) {
            console.log("hoc: requisição HTTP pendente") 
            return ( <Component {...props} />)
        }
        console.log("hoc: carregando....")
        return (
            <p style={{ textAlign: 'center', fontSize: '30px' }}>
                Carregando dados
            </p>
        );
    };
}
export default hoc;