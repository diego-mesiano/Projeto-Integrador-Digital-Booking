import './style.scss'
import { Container, Row, Col} from 'react-bootstrap'
export default function Politicas() {
    return (

        <div className='politicasProduto'>
            <h2>Políticas</h2>
            <Container fluid>
                <Row xs={1} md={2} lg={3} >
                    <Col className='normasProduto' >
                        <strong>Normas: </strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur iure eum sint enim eos. Illo asperiores cum sequi similique, corrupti minus quisquam adipisci, enim, officiis ad alias dignissimos quod iusto.
                    </Col>

                    <Col className='segurancaProduto'>
                        <strong>Segurança: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repellat, alias cum mollitia iusto iste quam dolores dolor cupiditate hic optio culpa aliquam voluptatem officiis repudiandae ullam libero rem! Ut.
                    </Col>

                    <Col className='cancelamentoProduto'>
                        <strong>Cancelamento: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi velit quod facilis. Odit laborum sequi dolore odio ea, obcaecati reiciendis similique laudantium labore omnis adipisci laboriosam quod dolores explicabo? Repudiandae!
                    </Col>
                </Row>
            </Container>
        </div>
    )
}