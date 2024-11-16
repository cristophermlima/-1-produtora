import {Link} from 'react-router-dom'
import { useState } from 'react'

//ASSETS
import './Header.css'
import Logo from '../../assets/logo.svg'

import Button from '../Button/Button'

function Header () {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header >
            <div className="container" >
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo} height="120px"/></Link>

                    <div className='mobile-menu'>
                        <Button buttonStyle="secondery" onClick={() => setIsOpen(!isOpen)}>
                            Menu
                        </Button>
                    </div>

                    <nav className={`${isOpen ? 'open' : ''}`} >
                      <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={() => setIsOpen(!isOpen)} >
                        X
                      </Button>
                        <ul className='d-flex'>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/about">QUEM SOMOS </Link></li>
                            <li><Link to="/clients">CLIENTES</Link></li>
                            <li><Link to="/vaga">QUERO MINHA VAGA</Link></li>

                        </ul>
                </nav>
                </div>
           
            </div>
        </header>
    )
}

export default Header