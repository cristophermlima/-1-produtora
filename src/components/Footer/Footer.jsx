import { Link } from 'react-router-dom'

//ASSETS

import './Footer.css'
import Logo from '../../assets/logo.svg'
import eua from '../../assets/eua.svg'
import brasil from '../../assets/brasil.svg'
import instagram from '../../assets/instagram.svg'
import whatssap from '../../assets/whatssap.svg'


function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='d-flex jc-space-betweem mobile-fd-colum' >
                    <div className='footer-logo-col'>
                        <img src={Logo} className='footer-logo' height="200px" />
                        <p>Copyright Ñ é + 1</p>

                    </div>

                    <div className='solucoes'>
                        <p>Soluções : <br />
                            Videos profissionais, <br />
                            com estratégia e roteiros elaborados <br />
                            para o seu nicho.</p>
                     
                    </div>


                    <div className=' d-flex mobile-fd-colum' >
                        <div className='footer-col' >
                            <h3>Pages</h3>
                            <ul >
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">QUEM SOMOS </Link></li>
                                <li><Link to="/clients">CLIENTES</Link></li>
                                <li><Link to="/vaga">QUERO MINHA VAGA</Link></li>


                            </ul>



                        </div>


                    </div>

                    <div className=' d-flex mobile-fd-colum'>
                    <div className='footer-col '>
                        <h3>Contato</h3>
                        <p>Rio de Janeiro</p>
                        <p>54-996301632</p>
                        <div className='d-flex jc-space-between footer-copy'>
                        <div className='d-flex social-links'>
                            <a href="https://google.com" target='_blank'>
                                <img src={instagram} />
                            </a>
                            <a href="https://google.com" target='_blank'>
                                <img src={whatssap} color='#F7F2EF' />
                            </a>


                        </div>

                        </div>


                    </div>
                    </div>
                 


                </div>

            </div>
        </footer>
    )
}

export default Footer