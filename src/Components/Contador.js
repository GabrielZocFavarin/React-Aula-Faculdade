import React, { useState } from 'react';
import rambo from './Imagens/rambo.jpeg';
import michelle from './Imagens/Michelle.jpg';
import reload from './Imagens/slow-icon.png';
import './Contador.css';

const Contador = () => {
    const [ContadorTotal, setContadorTotal ] = useState(0);
    const [ContadorHomem, setHomem ] = useState(0);
    const [ContadorMulher, setMulher ] = useState(0);

    const Reset = () => {
        setContadorTotal(0);
        setHomem(0);
        setMulher(0);
    };

    const AddHomem = () => {
        setContadorTotal(ContadorTotal + 1);
        setHomem(ContadorHomem + 1);
    };

    const AddMulher = () => {
        setContadorTotal(ContadorTotal + 1);
        setMulher(ContadorMulher + 1);
    }

    const RemoveHomem = () => {
        if(ContadorTotal > 0 && ContadorHomem > 0) {
            setContadorTotal(ContadorTotal - 1);
            setHomem(ContadorHomem - 1);
        }
    };

    const RemoveMulher = () => {
        if(ContadorTotal > 0 && ContadorMulher > 0) {
            setContadorTotal(ContadorTotal - 1);
            setMulher(ContadorMulher - 1);
        }
    };

    return (
        <div id="Contar">
            <div id='Reset'>
                <h1>
                    Total : {ContadorTotal}
                </h1>
                <img
                    src={reload}
                    alt="Reset"
                    onClick={Reset} />
            </div>
            <div id="Homem">
                <p>Homens</p>
                <img src={rambo} alt="Homem"/>
                <div className="contador">Quantidade: {ContadorHomem}</div>
                <div className="Botões">
                    <button type="button" onClick={AddHomem}> + </button>
                    <button type="button" onClick={RemoveHomem}> - </button>
                </div>
            </div>
            <div id="Mulher">
                <p>Mulheres</p>
                <img src={michelle} alt="Mulher"/>
                <div className="contador">Quantidade: {ContadorMulher}</div>
                <div className="Botões">
                    <button type="button" onClick={AddMulher}> + </button>
                    <button type="button" onClick={RemoveMulher}> - </button>
                </div>
            </div>
        </div>
    )
};

export default Contador;
