import Cabecalho from '../../components/Cabecalho'
import BtnCadastrar from '../../components/Cabecalho/BtnCadastrar'
import Corpo from '../../components/Corpo'
import Pesquisa from '../../components/Pesquisa'
import LoginCadastro from '../../components/LoginCadastro'
import LoginForm from '../../components/LoginCadastro/LoginForm'
import Rodape from '../../components/Rodape'

export default function Login(){
    return(
        <>
        <Cabecalho>
            <BtnCadastrar/>
        </Cabecalho>
        <Corpo>
            <Pesquisa/>
            <LoginCadastro>
                <LoginForm/>
            </LoginCadastro>
        </Corpo>
        <Rodape/>
        </>
    )
} 