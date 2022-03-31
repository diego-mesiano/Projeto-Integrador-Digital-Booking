import Cabecalho from '../../components/Cabecalho'
import Corpo from '../../components/Corpo'
import Pesquisa from '../../components/Pesquisa'
import Rodape from '../../components/Rodape'
import BtnCadastrar from '../../components/Cabecalho/BtnCadastrar'
import BtnLogin from '../../components/Cabecalho/BtnLogin'
import Categorias from '../../components/Categorias'
import ListaProdutos from '../../components/ListaProdutos'

export default function FiltroCategoria(){
    return(
        <>
        <Cabecalho>
            <BtnCadastrar/>
            <BtnLogin/>
        </Cabecalho>
        <Corpo>
            <Pesquisa/>
            <Categorias/>
            <ListaProdutos por="categoria"/>
        </Corpo>
        <Rodape/>
        </>
    )
}