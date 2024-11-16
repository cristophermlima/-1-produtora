import React, { useState } from 'react';
import './teste.css';

const QuestionForm = () => {
  const [currentForm, setCurrentForm] = useState(1);
  const [inputValue, setInputValue] = useState(''); // Armazena o valor do campo de entrada atual
  const [responses, setResponses] = useState([]); // Armazena todas as respostas do formulário

  const nextForm = (event) => {
    event.preventDefault();

    // Salva a resposta atual no array de respostas
    setResponses((prevResponses) => [...prevResponses, inputValue]);

    setCurrentForm((prevForm) => prevForm + 1); // Avança para o próximo formulário
    setInputValue(''); // Limpa o campo de entrada
  };

  const enviarParaSheetMonkey = async () => {
    const webhookURL = 'https://api.sheetmonkey.io/form/g1XUfBofo8XoRW1NDFaKRj';

    // Formata as respostas como um objeto
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
        required
      />
      <button type="submit">Enviar</button>
    </form>,

    <form className="question" onSubmit={nextForm}>
      <label>Qual sua cidade?</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>,

    <form className="question" onSubmit={nextForm}>
      <label>Qual seu WhatsApp?</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>,

    <form className="question">
      <label>Qual seu faturamento atual?</label>
      <div className="income-options">
        <button type="button" onClick={() => {
          setResponses((prev) => [...prev, 'Até 5 mil']);
          setCurrentForm(currentForm + 1);
        }}>
          Até 5 mil
        </button>
        <button type="button" onClick={() => {
          setResponses((prev) => [...prev, 'De 5 mil a 10 mil']);
          setCurrentForm(currentForm + 1);
        }}>
          De 5 mil a 10 mil
        </button>
        <button type="button" onClick={() => {
          setResponses((prev) => [...prev, 'Mais de 10 mil']);
          setCurrentForm(currentForm + 1);
        }}>
          Mais de 10 mil
        </button>
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
      <label>
        Você está aplicando para uma sessão estratégica de análise e
        direcionamento para transformar cliques em clientes para o seu negócio.
        Faz sentido para você neste momento?
      </label>
      <div className="income-options">
        <button type="button" onClick={() => {
          setResponses((prev) => [...prev, 'SIM']);
          enviarParaSheetMonkey();
          setCurrentForm(currentForm + 1);
        }}>
          SIM
        </button>
        <button type="button" onClick={() => {
          setResponses((prev) => [...prev, 'NÃO']);
          enviarParaSheetMonkey();
          setCurrentForm(currentForm + 1);
        }}>
          NÃO
        </button>
      </div>
    </form>,
  ];

  return (
    <div className="agradecimento">
      {forms[currentForm - 1]}
      {currentForm > forms.length && (
        <p>
          Parabéns por dar esse próximo passo. <br />
          Aguarde nosso time entrar em contato com você para o agendamento. <br />
          <br />
          Nossos anúncios direcionados aparecem no momento certo para pessoas
          interessadas em melhorar sua saúde e qualidade de vida.
        </p>
      )}
    </div>
  );
};

export default QuestionForm;
