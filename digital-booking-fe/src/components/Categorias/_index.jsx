import './style.scss'
import CardCategorias from './CardCategorias'
import {Container, Row, Col} from 'react-bootstrap' 
import exemplo1 from '../../assets/img-categorias/exemplo1.png'

export default function Categorias(props){
    return(
        
        <Container className='corpoCategorias'>
            <Row>
                    <Col sm={12}>
                        <h2>Buscar por tipo de acomodação</h2>
                    </Col>
            </Row>
            <Row className='justify-content-md-center'>
                <Col xs={12} sm={6} md={3}>
                    <CardCategorias nome="Hotéis" qtd="905.365" img={exemplo1}/>
                </Col>
                <Col  xs={12} sm={6} md={3}>
                    <CardCategorias nome="Hotéis" qtd="905.365" img={exemplo1}/>
                </Col>
                <Col  xs={12} sm={6} md={3}>
                    <CardCategorias nome="Hotéis" qtd="905.365" img={exemplo1}/>
                </Col>
                <Col   xs={12} sm={6} md={3}>
                    <CardCategorias nome="Hotéis" qtd="905.365" img={exemplo1}/>
                </Col>
            </Row>
        </Container>
        
    )
}