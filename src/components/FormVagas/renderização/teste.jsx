import React, { useState } from 'react';
import './teste.css';

const QuestionForm = () => {
  const [currentForm, setCurrentForm] = useState(1);
  const [inputValue, setInputValue] = useState(''); // Estado para armazenar o valor do campo de entrada

  const nextForm = (event) => {
    event.preventDefault();
    setCurrentForm((prevForm) => prevForm + 1);
    setInputValue(''); // Limpa o campo de entrada ao passar para a próxima pergunta
  };

  const forms = [
    <form className="question" onSubmit={nextForm}>
      <h1>Formulário</h1>
      <label>Qual seu nome ?</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>,

    <form className="question" onSubmit={nextForm}>
      <label>Qual sua cidade?</label>
      <input
        type="cidade"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>,

    <form className="question" onSubmit={nextForm}>
      <label>Qual seu whatsapp?</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>,

    // Formulário de seleção de renda
    <form className="question">
      <label>Qual seu faturamento atual?</label>
      <div className="income-options">
        <button type="button" onClick={() => setCurrentForm(currentForm + 1)}>Até 5 mil</button>
        <button type="button" onClick={() => setCurrentForm(currentForm + 1)}>De 5 mil a 10 mil</button>
        <button type="button" onClick={() => setCurrentForm(currentForm + 1)}>Mais de 10 mil</button>
      </div>
    </form>,

    <form className="question" onSubmit={nextForm}>
      <label>Qual sua profissão?</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>,

    <form className="question" onSubmit={nextForm}>
      <label>Você já vende no digital?</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>,

    <form className="question" onSubmit={nextForm}>
      <label>Você já teve experiência com trabalho de tráfego pago?</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>,



    <form className="question">
      <label>Você está aplicando para uma sessao estratégica de <br />
        análise e direcionamento para transformar cliques em clientes pro seu negócio <br />
        Faz sentido pra voce isso neste momento?</label>
      <div className="income-options">
        <button type="button" onClick={() => setCurrentForm(currentForm + 1)}>SIM</button>
        <button type="button" onClick={() => setCurrentForm(currentForm + 1)}>NÃO</button>
      </div>
    </form>,
  ];

  return (
    <div className='agradecimento'>
     
      {forms[currentForm - 1]}
      {currentForm > forms.length && (
        <p>
          Parabéns por dar esse próximo passo. <br />
          Aguarde nossos time entrar em contato com você para o agendamento. <br /> 
          <br /><br />
          Nossos anúncios direcionados aparecem no momento certo para pessoas interessadas em melhorar sua saúde e qualidade de vida.
        </p>
      )}
    </div>
  );
};

export default QuestionForm;
