import './style.scss'
import { Formik, Field, Form } from 'formik';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function CadastroForm() {
    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <>
            <h2>Criar Conta</h2>

            <div className="d-flex flex-column justify-content-center align-items-center text-center my-4" >
                <Formik

                    initialValues={{
                        nome: '',
                        sobrenome: '',
                        email: '',
                        senha: ''
                    }}

                    onSubmit={handleSubmit}>

                    <Form className='formLogin'>

                        <div className='d-flex justify-content-between py-2 nomeSobrenome'>
                            <div className='d-flex flex-column'>
                                <label className="labels" htmlFor="nome">Nome</label>
                                <Field type={'text'} className="form-control nome" id="nome" name="nome" />
                            </div>

                            <div className='d-flex flex-column'>
                                <label className="labels" htmlFor="sobrenome">Sobrenome</label>
                                <Field type={"text"} className="form-control sobrenome" id="sobrenome" name="sobrenome" />
                            </div>
                        </div>

                        <label className="labels" htmlFor="email">E-mail</label>
                        <Field type={"email"} className="form-control email" id="email" name="email" />

                        <label className="labels" htmlFor="email">Confirmar E-mail</label>
                        <Field type={"email"} className="form-control email" id="email" name="email" />

                        <label className="labels" htmlFor="senha">Senha</label>
                        <Field type={"password"} className="form-control senha" id="senha" name="senha" />

                        <label className="labels" htmlFor="cSenha">Confirmar senha</label>
                        <Field type={"password"} className="form-control csenha" id="cSenha" name="cSenha" />

                        <Button variant="warning" type="submit" className="btnEntrar m-3">Cadastrar</Button>
                    </Form>
                </Formik>
                <div className='semConta'>
                    Já tem uma conta? <Link to="/login">Iniciar sessão</Link>
                </div>
            </div>
        </>
    )
}