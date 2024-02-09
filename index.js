const perguntas = [
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: [
        "let",
        "var",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador usado para atribuição de igualdade em JavaScript?",
      respostas: [
        "=",
        "==",
        "===",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado da expressão '5' + 2 em JavaScript?",
      respostas: [
        "7",
        "52",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método de array é usado para remover o último elemento?",
      respostas: [
        "pop()",
        "shift()",
        "splice()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de incremento em JavaScript?",
      respostas: [
        "++",
        "+=",
        "+",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "print()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado da expressão '10' == 10 em JavaScript?",
      respostas: [
        "true",
        "false",
        "Erro",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a estrutura de controle usada para tomar decisões em JavaScript?",
      respostas: [
        "if",
        "for",
        "while",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função usada para converter uma string em número em JavaScript?",
      respostas: [
        "parseInt()",
        "toString()",
        "convertToInt()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão 2 + 2 + '5' em JavaScript?",
      respostas: [
        "9",
        "45",
        "Erro",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //  loop ou laço de repetição
  for(const item of perguntas) {
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
  
  for( let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    quizItem.querySelector('dl').appendChild(dt)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
    }
  
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
  }
  
  
  quizItem.querySelector('dl dt').remove()
  
  
   // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
  