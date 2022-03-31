import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Cabecalho from '../../components/Cabecalho';
import BtnCadastrar from '../../components/Cabecalho/BtnCadastrar';
import BtnLogin from '../../components/Cabecalho/BtnLogin';
import Rodape from '../../components/Rodape'

import './style.scss';

const NotFound = () => {
    const [timer, setTimer] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(timer => --timer)
            if (timer === 0) {
                navigate('/')
            }
        }, 1000);

        return () => clearInterval(intervalId)
    }, [navigate, timer])

    return (
        <>
            <Cabecalho>
                <BtnCadastrar />
                <BtnLogin />
            </Cabecalho>
            <div id="corpo404">
                <h2>Nada por aqui =(</h2>
                <h3>Você será redirecionado para a página inicial em {timer} segundo(s)</h3>
            </div>
            <Rodape />

        </>
    )
}
export default NotFound;