import './style.scss'
import CardCategorias from './CardCategorias'
import { useState, useEffect } from 'react';
import api from '../../services/Api'
import { Spinner } from 'react-bootstrap';



export default function Categorias(props) {

    
    
    const [categoria, setCategoria] = useState([]);

    useEffect(()=>{
        api
            .get('/categoria')
            .then((response)=> {
                setCategoria(response.data) 
                
                
            })
            .catch((err)=>console.error(err))
    },[])

    

    return (

        <div className='corpoCategorias'>
            <div className='tituloCategoria'>
                <h2>Buscar por tipo de acomodação</h2>
            </div>
            <div className='cardsCorpo d-flex justify-content-between flex-wrap'>

                {
                categoria.length === 0?
                    <Spinner animation="border" />
                :
                    categoria.map(({key, id,titulo, urlImg, produtos})=>{
                        return(
                            <div key={id}>
                                <CardCategorias id={id} nome={titulo} qtd={produtos} imagem={urlImg} />
                            </div>

                        )
                    })
                }
                
            </div>
        </div>


    )
}