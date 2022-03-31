import './style.scss'
import { Link } from 'react-router-dom'

export default function CardCategorias(props) {
    return (
        <Link className="lnkCategorias" to={`/categoria/${props.id}`}>
            <div className="cardCategoria d-flex flex-column">
                <img src={props.imagem} alt="imagem categoria" className='imgCategoria' />
                <div className='cardDescricao d-flex flex-column'>
                    <div className='tituloCard'>{props.nome}</div>
                    <div className='qtdCard'>{props.qtd.length} {props.nome.toString().toLowerCase()}</div>
                </div>
            </div>
        </Link>
    )
}