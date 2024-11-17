import './Sobre.css'
import equipe from '../../assets/equipe.svg'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import diego1 from '../../assets/diego1.svg'
import makingof from '../../assets/makingof.mp4'

function Sobre() {
    return (
        <>
            <div className='sobre'>

                <div className='titulo'>
                <h1>QUEM É A Ñ É + UMA</h1>

                </div>
                <div className='equipe'>
               
                    <img src={equipe} height='500px'  />
                </div>
                <div className='sobre-text1'>
                    <h2>Somos especializados em criar conteúdos audiovisuais unicos e estratégicos,
                        com o objetivo de ajudar profissionais, massoterapeutas,
                        fisioterapeutas e psicólogos, a expandirem seus negócios através
                        de vídeos personalizados e gestão tráfego pago. </h2>
                </div>


                <div className='sobre-text2'>
                    <h1> Com uma abordagem criativa
                        e fora do comum, a produtora oferece soluções que vão além do óbvio, <br />
                        trazendo ideias inovadoras para
                        destacar os clientes nas redes sociais.</h1>
                </div>

                <div className='sobre-text2'>
                    <h1> A missão da produtora é transformar a <br />
                        maneira como esses profissionais se <br />
                        conectam com seu público, utilizando <br />
                        vídeos que engajam e covertem. <br />
                        Oferece um acompanhamento
                        personalizado, desde a concepção das <br />
                        ideias até a execução e publicação dos
                        conteúdos, focando em dovbrar o <br />
                        faturamento dos clientes por meio de <br />
                        estratégias de vídeos eficazes
                    </h1>
                </div>
                <div className='videos'>
                <video width={300}  controls autoPlay loop muted>
                    <source src={makingof} type='video/mp4' />
                </video>
                </div>

                <div className='sobre-container'>
                  
                    <div className='sobre-text4'>
                        <h1>A Ñ é + uma é liderada por Diego Mendes Zimmer, um ex-terapeuta que entende <br />
                            profundamente as dores e necessidades desses profissionais, garantindo um conteúdo relevante, <br />
                            autêntico e que realmente faz  diferença no mercado.</h1>
                    </div>
                    <div className='image-container'>
                    <img src={diego1} className='background-image' />
                   </div>
               
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

export default Sobre