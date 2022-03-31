import './style.scss'
import { Navbar, Nav} from 'react-bootstrap'
import logo from '../../assets/img/logoNoSlogan.svg'
import {Link} from 'react-router-dom'
import { useLogado } from '../../context/Logado'


export default function Cabecalho(props) {
    const {logado, setLogado} = useLogado();

    return (
        <header>
            <Navbar  collapseOnSelect expand="lg" bg="light" fixed="top" className="nav-bar">

                <Navbar.Brand>
                    <Link to="/" className='d-flex' style={{textDecoration:"none"}}>
                        <div>
                            <img alt="logo" src={logo} className='logoHeader' />
                        </div>
                        <div className='slogan'>
                            Sinta-se em casa
                        </div> 
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                {logado.autenticado ?
                   <Navbar.Collapse className="logado">
                    <div className='painel-logado'>
                        <div>
                            <svg height="38" width="38">
                                <circle fill="#31363F" cx="19" cy="19" r="19" />
                                <text fontSize="19" fontFamily="Quicksand" fontWeight="bold" fill="white" textAnchor="middle" x="18.5" y="25">
                                    JO
                                </text>
                            </svg>
                        </div>
                        <div className='nome-completo'>
                            <div className='saudacao'>Olá,</div>
                            <div className='nome'>Jeziel Oliveira</div>
                        </div>
                        <div className='logout' onClick={(item)=>setLogado({autenticado: false , checkIn: null, checkOut: null, ultimaPagina: null})}>
                            X
                        </div>
                    </div>
                    </Navbar.Collapse>

                    :

                    <Navbar.Collapse id="responsive-navbar-nav" className="logar justify-content-end">
                        <Nav>
                           {props.children}
                        </Nav>
                    </Navbar.Collapse>
                }
            </Navbar>
        </header>
    )
}