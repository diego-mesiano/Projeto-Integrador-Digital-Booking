import './style.scss'
import CardProdutos from './CardProdutos'
import GeraIcones from './GeraIcones'
import api from '../../services/Api'
import { useState,useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router';
import { useLogado } from '../../context/Logado'

export default function ListaProdutos(props) {

    const [produtos, setProdutos] = useState([]);
    const { categoriaId } = useParams();
    const [nomeCategoria, setNomeCategoria] = useState("");

    const {setLogado } = useLogado({});
    
    
    useEffect(()=>{
        
        setLogado((itens)=>({...itens, ultimaPagina:window.location.pathname}))

        
    },[setLogado, categoriaId])
    
    
    useEffect(()=>{


        if (props.por==="todos"){
            api
                .get('/produtos')
                .then((response) => 
                    setProdutos(response.data))
                .catch((err)=>console.error(err))
        }
        if (props.por==="categoria"){
            api
                .get(`/categoria/${categoriaId}`)
                .then((response) => { 
                    setProdutos(response.data.produtos)
                    setNomeCategoria(response.data.descricao)
                })
                .catch((err)=>console.error(err))
        }
    },[props.por, categoriaId])

    return (
        <div className="produtos d-flex flex-column">
            <div className="tituloProdutos">
                {
                    props.por === "todos" ? 
                        <h2>Recomendações</h2> : 

                    props.por === "categoria" ?
                        <h2>{nomeCategoria}s disponíveis</h2> : null
                }
            </div>
            <div className="d-flex flex-wrap justify-content-between">
            {produtos.length === 0 ? 
                <Spinner animation="border" />
                :
                produtos.map(({ id, nome,descricao,nota,caracteristicas,imagems,categoria,cidade, titulo}) => {
                    return (
                        <div key={id}>
                            <CardProdutos id={id} imagem={(imagems.length > 0 ? imagems[0].urlImg : <Spinner animation="border" />)} estrelas={Math.round(nota/2)} categoria={props.por === "todos" ? categoria.titulo : nomeCategoria } produto={nome} nota={nota} notaVerbal={nota} distancia={cidade.nome} descricao={descricao}>
                                <GeraIcones  wifi={caracteristicas[0].wifi} tv={caracteristicas[0].tv} pets={caracteristicas[0].pets} arcondicionado={caracteristicas[0].arcondicionado} estacionamento={caracteristicas[0].estacionamento} piscina={caracteristicas[0].piscina} fumar={caracteristicas[0].fumar} />
                            </CardProdutos>
                        </div>
                    )
                })
            }
            </div>
        </div>

    )
}