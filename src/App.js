import React, { useEffect, useState } from 'react';
import ExibeDadosDaNasa from './componentes/nasa'
import hoc from './componentes/hoc';
import axios from 'axios'

function App() {
    console.log("===== 1 =====")
    const Nasa = hoc(ExibeDadosDaNasa);
    console.log("===== 2 =====")
    const [estadoDaAplicacao, setEstadoDaAplicacao] = useState({
        consultando: false,
        dados: null,
    });
    const key = "MkpLyXbJbwmpTJNh3zaxZLNBs4G23cmY8RwqQhbl"
    
    useEffect(() => {// você pode pensar no Hook useEffect como componentDidMount, componentDidUpdate, e componentWillUnmount combinados.
        console.log("===== 3 =====")
        setEstadoDaAplicacao({ consultando: true });
        axios.all([
            axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=2020-11-16`),
            axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
        ])
        .then((respostaJson) => {
            console.log("==> " + respostaJson)
            setEstadoDaAplicacao({ consultando: false, dados: respostaJson });
        });
    }, [setEstadoDaAplicacao]);
    
    return (
        <div>
            {console.log('passando por aqui ===== 4 =====')}
            <Nasa isLoading={estadoDaAplicacao.consultando} dados={estadoDaAplicacao.dados} />
        </div>
    );
}

export default App;
