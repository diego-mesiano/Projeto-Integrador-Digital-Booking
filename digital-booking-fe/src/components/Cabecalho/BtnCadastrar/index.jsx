import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function BtnCadastrar(){
    return(
        <>
        <Link to="/cadastro">
            <Button variant="outline-warning" className="btn-criar-conta">Criar conta</Button>
        </Link>
        </>
    )
}