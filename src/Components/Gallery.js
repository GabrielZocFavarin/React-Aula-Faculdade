import React, { useState, useEffect } from 'react';

export default function Gallery() {
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

  useEffect(() => {
    if (texto === '') {
      const timer = setTimeout(() => {
        let index = 0;
        const interval = setInterval(() => {
          if (index < frase.length) {
            setTexto((textoAnterior) => textoAnterior + frase[index]);
            index++;
          } else {
            clearInterval(interval);
            setTimeout(() => {
              setTexto('');
            }, 1000);
          }
        }, intervalo);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [texto]);

  return (
    <div>
      <h1>{texto}</h1>
    </div>
  );
}
