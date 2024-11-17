import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Hero.css';
import Button from '../Button/Button';
import Foto1 from '../../assets/foto1.svg';
import Foto2 from '../../assets/foto2.svg';
import mao from '../../assets/mao.svg';
import videoheader from '../../assets/videoheader.mp4';

function Hero() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const words = ['TRANSFORMAM', 'ATRAEM', 'CONQUISTAM', 'INSPIRAM'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='hero-container'>
                <video className="hero-video" autoPlay loop muted>
                    <source src={videoheader} type="video/mp4" />
                </video>

                <div className='hero-text'>
                    <div className='estatico'>
                        <h1>
                            <span className='text-yellow2'>Acelere</span> os seus resultados através <br />
                            de vídeos que
                        </h1>
                    </div>

                    <div className='dinamico'>
                        <span>{words[currentWordIndex]}</span>
                    </div>
                </div>
            </div>

            <div className="card-container">
                {[Foto1, Foto2, mao].map((image, index) => (
                    <div className="card" key={index}>
                        <div className="rotating-image">
                            <img src={image} alt={`Imagem ${index + 1}`} />
                        </div>
                        <div className='message'>
                            {index === 0 && 'Os detalhes fazem a diferença, vamos contar a sua história?'}
                            {index === 1 && 'Levamos a sua mensagem para além das telas, direto ao coração do público'}
                            {index === 2 && 'Instruções, planejamento e criatividade: a fórmula para vídeos que envolvem e impactam'}
                        </div>
                    </div>
                ))}
            </div>

            <div className='button-center'>
                <Link to="/Vaga">
                    <Button buttonStyle="primary" arrow>
                        Quero minha vaga
                    </Button>
                </Link>
            </div>
        </>
    );
}

export default Hero;
