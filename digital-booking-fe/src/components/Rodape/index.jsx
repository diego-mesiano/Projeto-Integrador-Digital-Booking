import './style.scss'
import logo from '../../assets/img/logo-footer.svg'
import face from '../../assets/img/face.svg'
import ln from '../../assets/img/in.svg'
import tw from '../../assets/img/tw.svg'
import insta from '../../assets/img/insta.svg'

export default function Rodape(){
    return(
        <footer>

                <div className='bloco-logo'>
                    <img src={logo} alt="logo" />
                    ©2022 Digital Booking
                </div>

                <div className='bloco-sociais'>
                    <img src={face} alt="Facebook" />
                    <img src={ln} alt="Linkedln" />
                    <img src={tw} alt="Twitter" />
                    <img src={insta} alt="Instagram" />
                </div>

        </footer>
    )

}