import './style.scss'
import voltar from '../../assets/img/voltar.svg'
import point from '../../assets/img/point10x14.svg'
import GeraEstrelas from '../ListaProdutos/GeraEstrelas'
import { Link } from 'react-router-dom'
import GaleriaImagens from './GaleriaImagens'
import GeraIconesProduto from './GeraIconesProduto'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router';
import api from '../../services/Api'
import { useState, useEffect } from 'react'
import NotaVerbal from '../NotaVerbal'
import fav from '../../assets/img/favorito.svg'
import share from '../../assets/img/share.svg'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Calendario from '../Calendario'
import Politicas from '../Politicas'
import { useLogado } from '../../context/Logado'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from 'react-router-dom';



export default function DetalheProduto(props) {

    const { produtoId } = useParams();
    const [produto, setProduto] = useState({});
    const [categoria, setCategoria] = useState({});
    const [cidade, setCidade] = useState();
    const [pais, setPais] = useState()
    const [caracteristicas, setCaracteristicas] = useState([]);

    const {logado, setLogado } = useLogado({});
    const navigate = useNavigate();
    
    




    useEffect(() => {
        api
            .get(`/produtos/${produtoId}`)
            .then((response) => {
                setProduto(response.data)
                setCategoria(response.data.categoria)
                setCidade(response.data.cidade.nome)
                setPais(response.data.cidade.pais)
                setCaracteristicas(response.data.caracteristicas[0])
            })
            .catch((err) => console.error(err))
    }, [produtoId])

    function alertaLogin() {
        
        setLogado((itens)=>({...itens, ultimaPagina:window.location.pathname + "/reserva"}))
        

        return (
            
            Swal.fire({
                icon: 'warning',
                title: 'Já é nosso cliente?',
                text:"É necessario se autenticar para fazer reservas.",
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                },
                showDenyButton: true,
                confirmButtonText: 'Cadastrar',
                denyButtonText: 'Fazer login',
                confirmButtonColor: '#F0572D',
                denyButtonColor: '#F0572D'

            }).then((result)=>{
                if (result.isConfirmed) {
                    navigate('/cadastro')
                }else{
                    navigate('/login')
                }
            })

        )
    }

    return (
        
        produto ?
            <div className='detalheProduto'>

                <div className='cabecalhoProduto d-flex justify-content-between align-items-center'>

                    <div className='titulosProduto d-flex flex-column'>
                        <div className='categoriaProduto'>{categoria.descricao ? categoria.descricao.toUpperCase() : null}</div>
                        <div className='nomeProduto'>{produto.nome}</div>
                    </div>

                    <div className='voltarProduto'>
                        <Link to={logado.ultimaPagina}>
                            <img src={voltar} alt="voltar" />
                        </Link>

                    </div>

                </div>


                <div className='avaliacaoElocalizacaoProduto d-flex justify-content-between align-items-center'>

                    <div className='localizacaoProduto d-flex'>
                        <img src={point} alt="localização" />
                        <div className='textoLocalizacao'>
                            {cidade}, {pais}
                        </div>
                    </div>

                    <div className='avaliacaoProduto d-flex align-items-center'>
                        <div className='area1'>
                            <div className='notaVerbalArea1'>
                                <NotaVerbal nota={produto.nota} />
                            </div>
                            <div className='estrelasArea1'>
                                <GeraEstrelas qtd={Math.round(produto.nota / 2)} />
                            </div>

                        </div>

                        <div className='area2'>
                            <svg height="34" width="34" >
                                <rect fill="#545776" width="34" height="34" rx="5" />
                                <text fontSize="17" fontFamily="Quicksand" fontWeight="bold" fill="white" textAnchor="middle" x="17.5" y="22">
                                    {produto.nota}
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className='favShare'>
                    <img className='sharee' src={share} alt="" />
                    <img className='favo' src={fav} alt="" />
                </div>

                <div className='imagensProduto'>

                    <GaleriaImagens id={produtoId} />


                </div>

                <div className='descricaoProduto'>
                    <div className='tituloProduto'><h1>{produto.nome}</h1></div>

                    <div className='qualificacaoProduto'>
                        4 Pessoas - 1 quarto - 3 camas - 1 banheiro
                    </div>
                    <div className='descricaoProduto'>
                        {produto.descricao}
                    </div>
                </div>

                <div className='caracteristicasProduto'>
                    <h2>O que esse lugar oferece</h2>
                    <GeraIconesProduto wifi={caracteristicas.wifi} tv={caracteristicas.tv} pets={caracteristicas.pets} arcondicionado={caracteristicas.arcondicionado} estacionamento={caracteristicas.estacionamento} piscina={caracteristicas.piscina} fumar={caracteristicas.fumar} />
                </div>

                <h2 className='tituloDatas'>Datas disponíveis</h2>
                <div className='reserva'>

                    <div className='calendarioContainer'>

                        <Calendario direcao="horizontal" meses={window.screen.width < 800 ? 1 : 2} />

                        <div className='iniciarReserva '>
                            <h2>Adicione as datas da sua reserva para obter preços exatos</h2>
                            <Button variant="warning" className="btnReserva" onClick={() => logado.autenticado ? navigate('reserva') : alertaLogin()}>Iniciar Reserva</Button>
                        </div>

                    </div>




                </div>

                <Politicas />


            </div>
            :
            null

    )
}
