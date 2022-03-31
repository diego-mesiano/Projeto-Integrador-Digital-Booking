import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function BtnLogin(){
    return(
        <>
        <Link to="/login">
            <Button variant="outline-warning" className="btn-login">Iniciar sessão</Button>
        </Link>
        </>
    )
}