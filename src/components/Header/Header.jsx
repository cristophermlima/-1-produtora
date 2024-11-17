import { Link } from 'react-router-dom';
import { useState } from 'react';

// ASSETS
import './Header.css';
import Logo from '../../assets/logo.svg';
import Button from '../Button/Button';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    {/* Logo */}
                    <Link to="/"><img src={Logo} alt="Logo" height="120px" /></Link>

                    {/* Botão para o menu móvel */}
                    <div className="mobile-menu">
                        <Button buttonStyle="secondery" onClick={toggleMenu}>
                            Menu
                        </Button>
                    </div>

                    {/* Navegação */}
                    <nav className={`nav ${isOpen ? 'open' : ''}`}>
                        {/* Botão de fechar o menu móvel */}
                        <Button
                            buttonStyle="unstyled"
                            className="mobile-menu close-btn"
                            onClick={toggleMenu}
                        >
                            ✖
                        </Button>
                        <ul className="d-flex">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/about">QUEM SOMOS</Link></li>
                            <li><Link to="/clients">CLIENTES</Link></li>
                            <li><Link to="/vaga">QUERO MINHA VAGA</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
