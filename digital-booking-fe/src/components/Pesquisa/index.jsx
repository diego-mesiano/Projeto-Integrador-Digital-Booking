import './style.scss'
import { Form, Button, InputGroup} from 'react-bootstrap'
import point from '../../assets/img/point.svg'
import calendar from '../../assets/img/calendar.svg'
import React from "react";
import Calendario from './Calendario';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react'
import api from '../../services/Api'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';


export default function Pesquisa() {

    const [cidades, setCidades] = useState([]);
    const [options, setOptions] = useState([{}]);

    const { produtoId } = useParams();
    
    const navigate = useNavigate();
    

    useEffect(() => {
        api
            .get('/cidades')
            .then((response) => {
                setCidades(response.data)


            })
            .catch((err) => console.error(err))


    }, [])

    //função para mostrar cidades por ordem alfabética, função do componente AutoComplete
    useEffect(() => {
        setOptions(
            cidades.map((option) => {
                const firstLetter = option.nome[0].toUpperCase();
                return {
                    firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
                    ...option,
                };
            })
        ) 
    }, [cidades])




    return (
        <div className="bloco-pesquisa">

            <h1>Buscar ofertas em casas, apartamentos e muito mais</h1>


            <Form>

                <Form.Group className="formulario d-flex justify-content-around" controlId="formPesquisa">

                    <div className="inputsContainer d-flex">
                        <div className='inputLocal'>
                            <InputGroup className="input-pesquisa">
                                <InputGroup.Text id="basic-addon1">
                                    <img src={point} alt="point" />
                                </InputGroup.Text>

                                <Autocomplete
                                    value={options[`${produtoId}`]}
                                    onChange={(event, a)=> navigate(`/cidades/${a.id}`)}
                                    className='inputCidades'
                                    size="small"
                                    disablePortal
                                    id="combo-box"
                                    options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                                    groupBy={(option) => option.firstLetter}
                                    getOptionLabel={(option) =>option.nome }
                                    getOptionSelected={(option, value) => option.id === value.id }
                                    blurOnSelect={false}
                                    sx={{ width: 357, height: 40 }}
                                    renderInput={(params) => <TextField {...params} label="Onde Vamos?"/>}
                                />

                            </InputGroup>
                        </div>

                        <div>
                            <InputGroup >
                                <InputGroup.Text >
                                    <img src={calendar} alt="calendar" />
                                </InputGroup.Text>
                                <Calendario />
                            </InputGroup>
                        </div>
                    </div>

                    <div className='btnContainer'>
                        <Button variant="warning" type="submit" className="btn-buscar">Buscar</Button>
                    </div>

                </Form.Group>

            </Form>


        </div>
    )
}