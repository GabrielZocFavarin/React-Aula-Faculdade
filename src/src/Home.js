import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1> Pagina Principal do Programa </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atividade1">Atividade1</Link>
                    </li>
                    <li>
                        <Link to="/Atividade2">Atividade2</Link>
                    </li>
                    <li>
                        <Link to="/Atividade3">Atividade3</Link>
                    </li>
                    <li>
                        <Link to="/Atividade4">Atividade4</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Home;