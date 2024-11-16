import './Banner.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'


function Banner() {
    return (
        <>
            <div className='banner'>

                <div className='banner-text1'>
                    <h1>Aplique para um <span className="text-yellow">PLANO</span>  de ação personalizado para criar e
                       e roteirizar seus vídeos. De forma <span className="text-yellow">GRATUITA</span>  em 30 minutos alguém do meu time irá te
                        ajudar a saber como dobrar seu faturamento através desse <span className="text-yellow">PLANO</span>.</h1>
                </div>


                <div className='banner-text2'>
                    <h1> Eu vou te entregar através dessa sessão gratuita de 30min</h1>
                </div>

                <div className='banner-text3'>
                    <h1> •    Ideias <span className="text-yellow">criativas</span> que conectam com seu público. <br />
                        •    Um processo rápido e <span className="text-yellow">eficiente</span>  para criar seus roteiros  <br />
                        •    Como gravar vídeos <span className="text-yellow">profissionais</span>  com o que você já tem, de forma simples e prática. <br />
                        •    Dicas <span className="text-yellow">exclusivas</span> de um profissional da área que já foi terapeuta como você.</h1>
                </div>


                <div className='banner-text4'>
                    <h1>Nós vamos te ajudar a escalar seu resultado sem se preocupar com a parte "chata do processo". Nós faremos tudo!  A copy dos criativos, páginas, o tráfego para funis, os vídeos e tudo o que você precisa.</h1>
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

export default Banner