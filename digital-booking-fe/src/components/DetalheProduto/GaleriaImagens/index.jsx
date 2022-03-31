import './style.scss'
import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import ImageGallery from 'react-image-gallery';
import api from '../../../services/Api'
import { Spinner } from 'react-bootstrap';

export default function GaleriaImagens(props) {

    const [maisFotos, setMaisFotos] = useState(false)

    const [retornoImg, setRetornoImg] = useState([])

    const images = []

   useEffect(() => {
        api
            .get(`produtos/${props.id}`)
            .then((response) => {
                setRetornoImg(response.data.imagems)
            })
            .catch((err) => console.error(err))

            if(window.screen.width < 765){
                setMaisFotos(true)
            }
            
    }, [props.id])



    retornoImg.map(({ urlImg }) => {
        return images.push({ original: urlImg, thumbnail: urlImg})
    })


    return (

        <>
            {   
                !maisFotos ?
                    <div className='galeriaInicial d-flex flex-column'>
                        {images.length === 0 ?
                            <Spinner animation="border" />
                            :
                            <>
                                <div className='d-flex'>
                                    <div className='fotoPrincipal'>
                                        <img src={images[0].original} alt="" className='imgPrincipal' />
                                    </div>

                                    <div className='fotosSecundarias d-flex flex-column'>
                                        <div className='d-flex'>
                                            <div className='secundaria'>
                                                <img src={images[1].original} alt="" className='imgSecundaria' />
                                            </div>
                                            <div className='secundaria'>
                                                <img src={images[2].original} alt="" className='imgSecundaria bordaSuperiorDireita' />
                                            </div>
                                        </div>

                                        <div className='d-flex'>
                                            <div className='secundaria'>
                                                <img src={images[3].original} alt="" className='imgSecundaria' />
                                            </div>
                                            <div className='secundaria'>
                                                <img src={images[4].original} alt="" className='imgSecundaria bordaInferiorDireita' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='verMais'>
                                    <Button variant="outline-warning" className="btnVerMais" onClick={() => setMaisFotos(true)}>Ver mais fotos</Button>
                                </div>
                            </>
                            
                        }
                    </div>
                    :
                    <ImageGallery items={images} useTranslate3D={false} thumbnailPosition='bottom' useBrowserFullscreen={false} showNav={true} autoPlay={true} showIndex={true}/>
            }
        </>

    )
}