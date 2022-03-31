
import Cabecalho from '../../components/Cabecalho'
import Corpo from '../../components/Corpo'
import Rodape from '../../components/Rodape'
import BtnCadastrar from '../../components/Cabecalho/BtnCadastrar'
import BtnLogin from '../../components/Cabecalho/BtnLogin'
import DetalheReserva from '../../components/DetalheReserva'

export default function Reserva(){
    return(
        <>
        <Cabecalho>
            <BtnCadastrar/>
            <BtnLogin/>
        </Cabecalho>
        <Corpo>
            <DetalheReserva/>
        </Corpo>
        <Rodape/>
        </>
    )
}