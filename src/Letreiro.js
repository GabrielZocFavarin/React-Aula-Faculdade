import React, { useState, useEffect } from 'react';

export function Letreito() {
  const [texto, setTexto] = useState('');
  const frase = "Conheça a FATEC!";
  const intervalo = 100; 

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      if (index < frase.length) {
        setTexto((textoAnterior) => textoAnterior + frase[index]);
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setTexto('');
        }, 1000);
      }
    }, intervalo);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>{texto}</h1>
    </div>
  );
}

