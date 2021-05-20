import React from 'react';

class Linha extends React.Component {
    render() {
        const dados = this.props.dados
        return (
            <div className="row mb-4">
                <div className="col-10 ">
                    <img src={dados.url} width="100%" alt="foto Nasa" />
                </div>
                <div className="col-2">
                    <p className="texto">{dados.explanation}</p>
                </div>
            </div>
        )
    }
}

class Lista extends React.Component {
    render() {
        const linhas = [];
        console.log("==> Lista: " + this.props.listaDeDados)
        this.props.listaDeDados.forEach(
            (dados, index) => {
                linhas.push(
                    <Linha dados={dados.data} key={index} />
                );
            }
        );

        return (
            <div className="container">
                <div className="badge d-block bg-primary text-white my-2">
                    <h1>Astronomia: Foto do Dia</h1>
                </div>
                <div>
                    {linhas}
                </div>
            </div>
        )
    }
}

const ExibeDadosDaNasa = (props) => {
    const { dados } = props;
    console.log("Passando pela nasa: " + dados)
    if (!dados || dados.length === 0) return false;
    return (<Lista listaDeDados={dados} />);
};

export default ExibeDadosDaNasa


