import Galeria from './Components/Galeria.js';
import { Link } from 'react-router-dom';

export default function Atividade3(){
    return(
        <>
            <Galeria />


            <br />
            <Link to="/"> BACK TO HOME PAGE </Link>
        </>
    );
}



