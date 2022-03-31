import './style.scss'
import Cabecalho from '../../components/Cabecalho'
import Corpo from '../../components/Corpo'
import Pesquisa from '../../components/Pesquisa'
import Rodape from '../../components/Rodape'
import BtnCadastrar from '../../components/Cabecalho/BtnCadastrar'
import BtnLogin from '../../components/Cabecalho/BtnLogin'
import DetalheProduto from '../../components/DetalheProduto'

export default function Produto(){
    return(
        <>
        <Cabecalho>
            <BtnCadastrar/>
            <BtnLogin/>
        </Cabecalho>
        <Corpo>
            <Pesquisa/>
            <DetalheProduto/>
        </Corpo>
        <Rodape/>
        </>
    )
}