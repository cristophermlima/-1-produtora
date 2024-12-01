import './Clientes.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import depoimento from '../../assets/depoimento.mp4'
import depoimento3 from '../../assets/depoimento3.mp4'









function Clientes() {
    return (
        <>
            <div className='container'>

                <div className='clientes-text1'>
                    <h1>Por que confiar na Não É + 1 Produtora?</h1>

                </div>


                <div className='clientes-text2'>
                    <h1>Veja o que outros profissionais dizem sobre esse trabalho:</h1>

                </div>

                <div className='videos'>
                <video width={300}  controls autoPlay loop muted>
                    <source src={depoimento} type='video/mp4' />
                </video>
                <video width={300}  controls preload='auto'>
                    <source src={depoimento3} type='video/mp4' />
                </video>
             
              
                
                </div>

                
                
                <div className='button-center'>

                    <Link to="/Vaga">
                        <Button onClick="handleButtonClick" buttonStyle="primary" arrow >
                            Quero minha vaga
                        </Button>
                    </Link>

                </div>



            </div>
          
        </>
    )

}

export default Clientes