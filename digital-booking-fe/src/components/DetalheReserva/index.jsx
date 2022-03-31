import './style.scss'
import voltar from '../../assets/img/voltar.svg'
import check from '../../assets/img/check.svg'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import { Formik, Field, Form } from 'formik';
import { Button } from 'react-bootstrap';
import Calendario from '../Calendario'
import GeraEstrelas from '../ListaProdutos/GeraEstrelas'
import Politicas from '../Politicas';
import { useLogado } from '../../context/Logado';
import { format, eachDayOfInterval } from 'date-fns';
import api from '../../services/Api';
import { useState, useEffect } from 'react';

export default function DetalheReserva(props) {
    const { produtoId } = useParams();
    const {logado} = useLogado({});

    const [produto, setProduto] = useState({});
    const [categoria, setCategoria] = useState({});
    const [cidade, setCidade] = useState();
    const [pais, setPais] = useState()
    const [imagem, setImagem] = useState([]);
    const images = []

    let dataInicial = logado.checkIn ? logado.checkIn : new Date();
    let dataFinal = logado.checkOut ? logado.checkOut : new Date();

    let datasReservadas = eachDayOfInterval({
        start: dataInicial,
        end: dataFinal
    })

    useEffect(() => {
        api
            .get(`/produtos/${produtoId}`)
            .then((response) => {
                setProduto(response.data)
                setCategoria(response.data.categoria)
                setCidade(response.data.cidade.nome)
                setPais(response.data.cidade.pais)
                setImagem(response.data.imagems)
            })
            .catch((err) => console.error(err))
    }, [produtoId])

    imagem.map(({ urlImg }) => {
        return images.push(urlImg)
    })

    return (
        <div className='containerReserva'>

            <div className='cabecalhoReserva d-flex justify-content-between align-items-center'>
                <div>
                    <div className='tituloReserva d-flex flex-column'>
                        <div className='categoriaReserva'>
                            {categoria.descricao ? categoria.descricao.toUpperCase() : null}
                        </div>
                        <div className='produtoReserva'>
                            {produto.nome}
                        </div>
                    </div>
                </div>
                <div className='voltarReserva'>
                    <Link to={`/produto/${produtoId}`}>
                        <img src={voltar} alt="voltar" />
                    </Link>
                </div>
            </div>

            <div className='detalhesReserva d-flex  justify-content-between'>
                <div className='colunaA d-flex flex-column justify-content-between'>

                    <div className='dadosUsuario'>
                        <h2 className='titulosReserva'>Complete seus Dados</h2>
                        <div className='formularioReserva'>
                            <Formik

                                initialValues={{
                                    nome: 'Jeziel',
                                    sobrenome: 'Oliveira',
                                    email: 'teste@teste',
                                    cidade: 'Campinas - SP'
                                }}

                            >

                                <Form className='formReserva d-flex flex-column'>

                                    <div className='d-flex justify-content-between' id="dadosVertical">

                                        <div className='d-flex flex-column '>
                                            <label className="labels" htmlFor="nome">Nome</label>
                                            <Field type={'text'} className="form-control nome" id="nome" name="nome" disabled />
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <label className="labels" htmlFor="sobrenome">Sobrenome</label>
                                            <Field type={"text"} className="form-control sobrenome" id="sobrenome" name="sobrenome" disabled />
                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-between' id="dadosVertical">

                                        <div className='d-flex flex-column'>
                                            <label className="labels" htmlFor="email">E-mail</label>
                                            <Field type={"email"} className="form-control email" id="email" name="email" disabled />
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <label className="labels" htmlFor="email">Cidade</label>
                                            <Field type={"text"} className="form-control cidade" id="cidade" name="cidade" />
                                        </div>
                                    </div>

                                </Form>



                            </Formik>

                        </div>
                    </div>

                    <br />
                    <br />

                    <div className='calendarioReserva2'>
                        <h2 className='titulosReserva'>Selecione sua data de reserva</h2>
                        <Calendario direcao={window.screen.width < 1107 ? "vertical" : "horizontal"} meses={2} />
                        
                    </div>

                    <br />
                    <br />

                    <div className='horarioReserva'>
                        <h2 className='titulosReserva'>Seu Horario de chegada</h2>
                        <div className='horaReserva'>
                            <div className='d-flex align-items-center'>
                                <img src={check} alt="check" />
                                <h3>Seu check-in pode ocorrer entre <strong>10h00</strong> e <strong>23h00</strong></h3>
                            </div>
                            <Formik>
                                <Form className='formHorario'>
                                    <div className='d-flex flex-column'>
                                        <label className="labels" htmlFor="hora">Indique a hora prevista de chegada</label>
                                        <Field as="select" id="hora" name='hora' disabled>
                                            <option value="hora">10h00</option>
                                            <option value="hora">11h00</option>
                                            <option value="hora">12h00</option>
                                        </Field>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>

                </div>

                <div className='colunaB'>
                    <div className='dadosReserva d-flex flex-column justify-content-around'>
                        <h2 className='titulosReserva'>Detalhe da reserva</h2>
                        <img src={imagem? images[0] :null} alt="" />

                        <div className='dadosProdutoReserva d-flex flex-column'>
                            <div className='categoriaProdutoReserva'>
                                {categoria.descricao ? categoria.descricao.toUpperCase() : null}
                            </div>
                            <div className='nomeProdutoReserva'>
                                {produto.nome}
                            </div>
                            <div className='geraEstrelaReserva'>
                                <GeraEstrelas qtd={Math.round(produto.nota / 2)}/>
                            </div>
                            <div className='localProdutoReserva d-flex'>
                                <div className='containerImagemReserva'>
                                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 6.65C4.5264 6.65 4.0722 6.46563 3.73731 6.13744C3.40242 5.80925 3.21429 5.36413 3.21429 4.9C3.21429 4.43587 3.40242 3.99075 3.73731 3.66256C4.0722 3.33437 4.5264 3.15 5 3.15C5.4736 3.15 5.9278 3.33437 6.26269 3.66256C6.59758 3.99075 6.78571 4.43587 6.78571 4.9C6.78571 5.12981 6.73953 5.35738 6.64979 5.5697C6.56004 5.78202 6.42851 5.97493 6.26269 6.13744C6.09687 6.29994 5.90002 6.42884 5.68336 6.51679C5.46671 6.60473 5.2345 6.65 5 6.65ZM5 0C3.67392 0 2.40215 0.516248 1.46447 1.43518C0.526784 2.3541 0 3.60044 0 4.9C0 8.575 5 14 5 14C5 14 10 8.575 10 4.9C10 3.60044 9.47322 2.3541 8.53553 1.43518C7.59785 0.516248 6.32608 0 5 0Z" fill="#31363F" />
                                    </svg>
                                </div>
                                <div className='enderecoProdutoReserva'>
                                    {cidade}, {pais}
                                </div>
                            </div>
                            <hr />

                            <div className='checkinReserva d-flex justify-content-between'>
                                <div className='checkinProdutoReserva'>
                                    Check in
                                </div>
                                <div className="checkingDataReserva">
                                   {format(dataInicial, 'dd/MM/yyyy')}
                                </div>
                            </div>
                            <hr />
                            <div className='checkoutReserva  d-flex justify-content-between'>
                                <div className='checkoutProdutoReserva'>
                                    Check out
                                </div>
                                <div className="checkoutDataReserva">
                                {format(dataFinal, 'dd/MM/yyyy')}
                                </div>
                            </div>
                            <hr />
                            <div className='d-grid gap-2'>
                                <Button variant="warning" size="lg" disabled={datasReservadas.length === 1 ? true: false }>Confirmar Reserva | {datasReservadas.length -1} {datasReservadas.length === 2 || datasReservadas.length ===1 ? "diária" : "diárias"}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Politicas />
        </div>
    )
}