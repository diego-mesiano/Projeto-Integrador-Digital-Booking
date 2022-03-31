import './style.scss'
import {Link} from 'react-router-dom'


export default function LoginCadastro(props){
    return(
        <div className="corpoLogin d-flex flex-column justify-content-center">
            <div id='sair'>
                <Link to="/" className='sair'>X</Link>
            </div>
            {props.children}
        </div>
    )
}