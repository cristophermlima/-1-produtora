import React, { useState } from 'react';
import './teste.css';

const QuestionForm = () => {
  const [currentForm, setCurrentForm] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [responses, setResponses] = useState([]);

  const nextForm = (event) => {
    event.preventDefault();
    setResponses((prevResponses) => [...prevResponses, inputValue]);
    setCurrentForm((prevForm) => prevForm + 1);
    setInputValue('');
  };

  const enviarParaSheetMonkey = async () => {
    const webhookURL = 'https://api.sheetmonkey.io/form/g1XUfBofo8XoRW1NDFaKRj';
    const dados = {
      Nome: responses[0],
      Cidade: responses[1],
      WhatsApp: responses[2],
      Faturamento: responses[3],
      Profissao: responses[4],
      VendeNoDigital: responses[5],
      ExperienciaTrafego: responses[6],
      SessaoEstrategica: responses[7],
    };

    try {
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
      });

      if (response.ok) {
        alert('Suas respostas foram enviadas com sucesso!');
      } else {
        alert('Erro ao enviar os dados. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao conectar com o Sheet Monkey.');
    }
  };

  const forms = [
    <form className="question" onSubmit={nextForm}>
      <h1>Formulário</h1>
      <label>Qual seu nome?</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Digite seu nome"
        required
      />
      <button type="submit">Próximo</button>
    </form>,

    <form className="question" onSubmit={nextForm}>
      <label>Qual sua cidade?</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Digite sua cidade"
        required
      />
      <button type="submit">Próximo</button>
    </form>,

    <form className="question" onSubmit={nextForm}>
      <label>Qual seu WhatsApp?</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="(xx) xxxxx-xxxx"
        required
      />
      <button type="submit">Próximo</button>
    </form>,

    <form className="question">
      <label>Qual seu faturamento atual?</label>
      <div className="income-options">
        <button type="button" onClick={() => {
          setResponses((prev) => [...prev, 'Até 5 mil']);
          setCurrentForm(currentForm + 1);
        }}>Até 5 mil</button>
        <button type="button" onClick={() => {
          setResponses((prev) => [...prev, 'De 5 mil a 10 mil']);
          setCurrentForm(currentForm + 1);
        }}>De 5 mil a 10 mil</button>
        <button type="button" onClick={() => {
          setResponses((prev) => [...prev, 'Mais de 10 mil']);
          setCurrentForm(currentForm + 1);
        }}>Mais de 10 mil</button>
      </div>
    </form>,

    <form className="question" onSubmit={nextForm}>
      <label>Qual sua profissão?</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Digite sua profissão"
        required
      />
      <button type="submit">Próximo</button>
    </form>,

    <form className="question" onSubmit={nextForm}>
      <label>Você já vende no digital?</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Sim ou Não"
        required
      />
      <button type="submit">Próximo</button>
    </form>,

    <form className="question" onSubmit={nextForm}>
      <label>Você já teve experiência com trabalho de tráfego pago?</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Sim ou Não"
        required
      />
      <button type="submit">Próximo</button>
    </form>,

    <form className="question">
      <label>Faz sentido para você aplicar para uma sessão estratégica?</label>
      <div className="income-options">
        <button type="button" onClick={() => {
          setResponses((prev) => [...prev, 'SIM']);
          enviarParaSheetMonkey();
        }}>SIM</button>
        <button type="button" onClick={() => {
          setResponses((prev) => [...prev, 'NÃO']);
          enviarParaSheetMonkey();
        }}>NÃO</button>
      </div>
    </form>,
  ];

  return (
    <div className="agradecimento">
      {currentForm <= forms.length ? forms[currentForm - 1] : (
        <p>Obrigado! Entraremos em contato em breve.</p>
      )}
    </div>
  );
};

export default QuestionForm;
