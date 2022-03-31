import Cabecalho from '../../components/Cabecalho'
import BtnLogin from '../../components/Cabecalho/BtnLogin'
import Corpo from '../../components/Corpo'
import Pesquisa from '../../components/Pesquisa'
import LoginCadastro from '../../components/LoginCadastro'
import Rodape from '../../components/Rodape'
import CadastroForm from '../../components/LoginCadastro/CadastroForm'


export default function Cadastro(){
    return(
        <>
        <Cabecalho>
            <BtnLogin/>
        </Cabecalho>
        <Corpo>
            <Pesquisa/>
            <LoginCadastro>
                <CadastroForm/>
            </LoginCadastro>
        </Corpo>
        <Rodape/>
        </>
    )
} 