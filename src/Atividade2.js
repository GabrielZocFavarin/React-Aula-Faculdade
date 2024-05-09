import  Contador from './Components/Contador';
import { Link } from 'react-router-dom';


export default function Atividade2() {
    return(
        <>
        <Contador />
        

        <br />
        <Link to='/'> Back to Home Page </Link>
        </>
    )
}
