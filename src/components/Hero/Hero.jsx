import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Hero.css';
import Button from '../Button/Button';
import Foto from '../../assets/foto.jpeg';
import Fototext from '../../assets/fototext.jpeg';
import foto4 from '../../assets/foto4.jpg';
import videoheader from '../../assets/videoheader.mp4';

function Hero() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const words = ['TRANSFORMAM', 'ATRAEM', 'CONQUISTAM', 'INSPIRAM'];

    // Animação do texto dinâmico
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Animação dos cards ao descer a página
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target); // Para não observar novamente após entrar
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
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
                {[Foto, Fototext, foto4].map((image, index) => (
                    <div className="card" key={index}>
                        <img src={image} alt={`Imagem ${index + 1}`} />
                        <div className="card-content">
                            <h3>
                                {index === 0 && 'Criamos os textos para você'}
                                {index === 1 && 'Conduzimos você na produção'}
                                {index === 2 && 'Fazemos você brilhar'}
                            </h3>
                            <p>
                                {index === 0 && 'Os detalhes fazem a diferença, vamos contar a sua história?'}
                                {index === 1 && 'Levamos a sua mensagem para além das telas, direto ao coração do público'}
                                {index === 2 && 'Instruções, planejamento e criatividade: a fórmula para vídeos que envolvem e impactam'}
                            </p>
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
