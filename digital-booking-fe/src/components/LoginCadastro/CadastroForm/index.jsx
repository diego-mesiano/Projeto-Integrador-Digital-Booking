import './style.scss'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom'
import error from '../../../assets/img/error.svg'
import * as Yup from 'yup'
import api from '../../../services/Api'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const schema = Yup.object().shape({
    nome: Yup.string().required('Preencha seu nome'),
    sobrenome: Yup.string().required('Preencha seu Sobrenome'),
    email: Yup.string().email('Formato de e-mail inválido').required('Por Favor preencha um e-mail válido'),
    cemail:Yup.string().required('Repita o e-mail').oneOf([Yup.ref('email')], 'emails diferentes'),
    senha: Yup.string().required('Digite uma senha').min(7,'Senha deve ter mais que 7 caracteres'),
    cSenha: Yup.string().required('Repetir a senha').oneOf([Yup.ref('senha')], 'Senhas não correspondem'),
})

export default function CadastroForm() {
    const navigate = useNavigate();
    
    const handleSubmit = (values) => {
        api.post("/usuario",{
            email: values.email,
            nome: values.nome,
            senha: values.senha,
            sobrenome: values.sobrenome,
        })
        .then(
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Usuário cadastrado com sucesso, faça login para continuar',
                showConfirmButton: false,
                timer: 1500
            }),navigate('/login'))
        .catch( err => err.response.status === 500?
            Swal.fire({
                position: 'top-end',
            icon: 'error',
            title: 'E-mail já cadastrado, faça login para continuar',
            showConfirmButton: false,
            timer: 1500
            }) : null
        )
    }

    return (
        <>
            <h2>Criar Conta</h2>
            <div className="d-flex flex-column justify-content-center align-items-center text-center my-4" >
                <Formik
                    validationSchema={schema}
                    initialValues={{
                        nome: '',
                        sobrenome: '',
                        email: '',
                        cemail:'',
                        senha: '',
                        cSenha:''
                    }}
                    onSubmit={handleSubmit}>
                    { ({errors}) =>(      
                        <Form className='formLogin'>
                            <div className='d-flex justify-content-between py-2 nomeSobrenome'>
                                <div className='d-flex flex-column'>
                                    <label className="labels" htmlFor="nome">Nome</label>
                                    {errors.nome &&(
                                        <div className='errosValidacao d-flex'><img src={error} style={{maxWidth:"12px", marginRight:"2px"}} />{errors.nome}</div>
                                    )}
                                    <Field type={'text'} className="form-control nome" id="nome" name="nome" />
                                    
                                </div>

                                <div className='d-flex flex-column'>
                                    <label className="labels" htmlFor="sobrenome">Sobrenome</label>
                                    {errors.sobrenome &&(
                                        <div className='errosValidacao d-flex'><img src={error} style={{maxWidth:"12px", marginRight:"2px"}} />{errors.sobrenome}</div>
                                    )}
                                    <Field type={"text"} className="form-control sobrenome" id="sobrenome" name="sobrenome" />
                                </div>
                            </div>

                            <label className="labels" htmlFor="email">E-mail</label>
                            {errors.email &&(
                                        <div className='errosValidacao d-flex'><img src={error} style={{maxWidth:"12px", marginRight:"2px"}} />{errors.email}</div>
                                    )}
                            <Field type={"email"} className="form-control email" id="email" name="email" />

                            <label className="labels" htmlFor="cemail">Confirmar E-mail</label>
                            {errors.cemail &&(
                                        <div className='errosValidacao d-flex'><img src={error} style={{maxWidth:"12px", marginRight:"2px"}} />{errors.cemail}</div>
                                    )}
                            <Field type={"email"} className="form-control cemail" id="cemail" name="cemail" />
                            

                            <label className="labels" htmlFor="senha">Senha</label>
                            {errors.senha &&(
                                        <div className='errosValidacao d-flex'><img src={error} style={{maxWidth:"12px", marginRight:"2px"}} />{errors.senha}</div>
                                    )}
                            <Field type={"password"} className="form-control senha" id="senha" name="senha" />
                            
                            <label className="labels" htmlFor="cSenha">Confirmar senha</label>
                            {errors.cSenha &&(
                                        <div className='errosValidacao d-flex'><img src={error} style={{maxWidth:"12px", marginRight:"2px"}} />{errors.cSenha}</div>
                                    )}
                            <Field type={"password"} className="form-control csenha" id="cSenha" name="cSenha" />
                            

                            <Button variant="warning" type="submit" className="btnEntrar m-3">Cadastrar</Button>
                        </Form>
                    )}
                </Formik>
                <div className='semConta'>
                    Já tem uma conta? <Link to="/login">Iniciar sessão</Link>
                </div>
            </div>
        </>
    )
}