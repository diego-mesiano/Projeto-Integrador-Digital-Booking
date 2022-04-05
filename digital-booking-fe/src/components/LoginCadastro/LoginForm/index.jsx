import './style.scss'
import { Formik, Field, Form } from 'formik';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import { useLogado } from '../../../context/Logado'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../../services/Api'

export default function LoginForm(props) {

    const {logado, setLogado} = useLogado();
    const navigate = useNavigate();
    
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        api
            .get('/usuario')
            .then((response) => {
                setUsuarios(response.data)
                
            })
            .catch((err) => console.error(err))
    }, [setUsuarios])
    
    const handleSubmit = (values) => {

        let filtro = [];

        usuarios.map(({ email, senha, nome, sobrenome, id }) => {
            if(email === values.email){
                filtro.push(email, senha, nome, sobrenome, id)
            }
            return null;
        })

       if (
        values.email &&
        values.senha.toString().length > 6 &&
        values.email === filtro[0] &&
        values.senha === filtro[1]){
            setLogado((itens)=>({...itens, autenticado:true, id:filtro[4], nome:filtro[2], sobrenome:filtro[3], email:filtro[0]}));
            navigate(logado.ultimaPagina);
        }
        else{
            
            Swal.fire({
                text: 'Por favor, tente novamente, suas credenciais são inválidas',
                icon: 'warning',
                confirmButtonColor: '#F0572D',
                confirmButtonText: 'Confirmar'
            })
            
        }   
        
    }

    return (
        <>
            <h2>Iniciar sessão</h2>

            <div className="d-flex flex-column justify-content-center align-items-center text-center" >
                <Formik

                    initialValues={{
                        email: '',
                        senha: ''
                    }}
                    
                    onSubmit={
                        handleSubmit
                    }>

                    <Form className='formLogin'>
                        <label className="labels" htmlFor="email">E-Mail</label>
                        <Field type={'text'} className="form-control email" id="email" name="email" />
                        

                        <label className="labels" htmlFor="senha">Senha</label>
                        <Field type={"password"} className="form-control senha" id="senha" name="senha"/>
                        
                        <Button variant="warning" type="submit" className="btnEntrar m-3">Entrar</Button>
                    </Form>
                </Formik>
                <div className='semConta'>
                    Ainda não tem conta? <Link to="/cadastro">Registre-se</Link>
                </div>
            </div>
        </>
    )
}