import './Form1.css'
import logo from '../../../assets/logo.svg'
import Button from '../../Button/Button'
import { Link } from 'react-router-dom'


function Form1() {
    return (
        <>

            <div className='container'>
                <div className='form'>
                    <div className='logo1'>
                        <img src={logo} height="200px" />
                    </div>


                    <div className='form-text1 d-flex fd-column al-center'>
                        <h2>Chegou a sua vez de destacar-se nas redes e ver seus vídeos trabalharem por você!
                        </h2>
                    </div>

                    <div className='form-text2'>
                        <h2> Preeencha o formulário para verificar a disponibilidade da sua vaga agora e tenha acesso a um plano de ação <br />
                            exclusivo para você, totalmente <span className='text-yellow'>gratuito</span> . <br />
                            Não perca essa oportunidade de revolucionar sua presença digital.
                        </h2>
                    </div>


                    <div className='form-text3'>
                        <h2> <span className='red'>IMPORTANTE:</span>  O preenchimento deste questionário NÃO garante sua aprovação. Avaliamos cada cliente de forma cautelosa e entramos em contato somente com as empresas que podem aproveitar essa oportunidade da melhor forma.
                        </h2>
                    </div>







                </div>
            </div>


        </>
    )

}

export default Form1