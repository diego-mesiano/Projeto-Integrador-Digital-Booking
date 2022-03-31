import './style.scss'
import a from './styleInLine.scss'
import GeraEstrelas from '../GeraEstrelas'
import { CCard, CCardText, CCardTitle, CCardBody, CCol, CCardImage, CRow } from '@coreui/react'
import point10x14 from '../../../assets/img/point10x14.svg'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import NotaVerbal from '../../../components/NotaVerbal'



export default function CardProdutos(props) {

    const navigate = useNavigate();

    return (
        <>
            <CCard className="mb-3 cardMestre" style={a} id="carddd" >
                <CRow className="g-0">
                    <CCol md={4}>
                        <CCardImage className="img-card-produto" src={props.imagem} />
                    </CCol>
                    <CCol md={8}>
                        <CCardBody>
                            <CCardTitle>
                                <div className='d-flex justify-content-between'>
                                    <div className='areaTituloProdutos '>
                                        <div className='categoriaProduto d-flex'>
                                            <div className='categoriaNome'>
                                                {props.categoria.toString().toUpperCase()}
                                            </div>
                                            <GeraEstrelas qtd={props.estrelas} />
                                            
                                        </div>
                                        <div className='nomeProduto'>
                                            {props.produto}
                                        </div>
                                    </div>
                                    <div className='areaAvaliacao' style={{ textAlign: 'right' }}>

                                        <svg height="29" width="35" >
                                            <rect fill="#31363F" width="34" height="27" rx="5" />
                                            <text fontSize="15" fontFamily="Quicksand" fontWeight="bold" fill="white" textAnchor="middle" x="17.5" y="19">
                                                {props.nota}
                                            </text>
                                        </svg>

                                        <NotaVerbal nota={props.nota}/>
                                    
                                    </div>
                                </div>
                            </CCardTitle>
                            <CCardText>
                                <div className='d-flex align-items-center'>
                                    <img src={point10x14} alt="point" />
                                    <div className="distanciaCentro">{props.distancia} - </div>
                                    <div className='mostrarMapa'> MOSTRAR NO MAPA</div>
                                </div>
                                {props.children}
                            </CCardText>



                            <CCardText>
                                {props.descricao}
                            </CCardText>

                            <CCardText>
                                <div className="d-grid gap-2">
                                    <Button variant="primary" size="lg" id='btnVerMais' onClick={()=> navigate(`/produto/${props.id}`)}>
                                        Ver mais
                                    </Button>
                                </div>
                            </CCardText>

                        </CCardBody>
                    </CCol>
                </CRow>
            </CCard>

        </>

    )
}