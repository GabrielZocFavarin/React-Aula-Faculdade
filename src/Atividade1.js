import Relogio from './Components/Relogio';
import Gallery from './Components/Gallery';
import { Link } from "react-router-dom";

export default function Atividade1(){
    return(
        <>
            <h1> Atividade 1 </h1>
            <Relogio />
            <Gallery />
            <br />
            <Link to='/'> Back to Home Page </Link>
    
        </>
    )
}