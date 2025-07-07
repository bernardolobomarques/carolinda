Plano de Ação Global do Projeto: "Nossa Constelação Secreta"
Este plano descreve cada página do seu jogo de enigma, sua finalidade, estética e os easter eggs a serem implementados.

Tecnologias Principais:
Frontend: React (com Create React App ou Vite para iniciar)

Estilização: CSS (Módulos CSS ou Styled Components para uma abordagem mais React-friendly e escopo de estilo por componente)

Gerenciamento de Estado (Easter Eggs): Context API ou Zustand/Jotai (para gerenciar a contagem e os easter eggs encontrados globalmente).

Estética Geral do Site ("Girly" com Rosa, Roxo e Violeta):
Paleta de Cores:

Rosa: Tons pastel e vibrantes (ex: #FFC0CB, #FF69B4).

Roxo: Tons claros e profundos (ex: #E0BBE4, #957DAD, #624F8A).

Violeta: Tons suaves (ex: #CBAACB, #A182B4).

Cores Neutras: Branco, creme, cinzas bem claros para textos e fundos secundários.

Elementos Visuais:

Fundo: Gradientes suaves entre os tons de rosa, roxo e violeta.

Emojis/Ícones: Uso consistente de emoji de amora (🍇), outras frutas vermelhas (🍓, 🍒), corações (❤️), estrelas (⭐), etc.

"Adesivos": Elementos gráficos que imitam adesivos colados nas páginas, com bordas brancas e uma leve sombra para dar profundidade. Podem ser de amoras, corações, estrelas cadentes, etc.

Tipografia: Fontes que remetam a uma escrita "feminina" ou fofa (script, handwriting), mas que sejam legíveis. Uma fonte mais clean para o corpo do texto e uma decorativa para títulos e elementos especiais.

Mobile-First: Todos os layouts e tamanhos de fonte/botão otimizados para telas pequenas. Botões de navegação grandes e de fácil toque.

Componentes Chave do React:
App.js: Componente raiz que gerencia o roteamento entre as páginas.

EasterEggContext.js: Contexto para armazenar a contagem de easter eggs e quais foram encontrados.

NavBar.js: Componente para os botões "Próxima" e "Anterior" (e possivelmente um ícone para ver a contagem de easter eggs).

PopUp.js: Componente reutilizável para exibir a mensagem "Parabéns por achar este easter egg!" e a contagem atual.

Componentes de Página: Home.js, Page1.js, Page2.js, etc.

Detalhamento das Páginas e Estética Específica:
0. Página Inicial: "Bem-Vinda à Nossa Aventura!" (/)
Propósito: Introdução ao jogo, apresentando-o como uma carta personalizada para a Carolina, sem revelar a existência dos dois níveis de prêmio.

Estética:

Fundo: Uma imagem de textura de papel de carta antigo ou decorado, em tons suaves de creme/rosa claro.

Conteúdo: O texto da "carta" centralizado na tela, com uma fonte que imita caligrafia ou uma fonte serifada elegante.

Detalhes: Emojis de amora (🍇) e adesivos digitais nas "bordas" da carta ou espalhados sutilmente como decoração. Talvez um coração com asas ou um símbolo de carta lacrada.

Navegação: Um botão "Começar Aventura" na parte inferior.

Easter Eggs: Nenhum nesta página.

1. Página "A Descoberta da Sintonia": "O Labirinto da Alma Gêmea" (/sintonia)
Propósito: Celebrar a sintonia única e o humor compartilhado de vocês.

Estética:

Fundo: Gradiente suave de rosa para roxo.

Elementos: Um design que evoca um "espelho" ou reflexo, talvez com duas silhuetas de perfis (genéricas, estilo ilustração) se complementando. Muitos emojis de amora (🍇) e corações (❤️) flutuando sutilmente. "Adesivos" de "matching" ou "soulmates".

Tipografia: Mais lúdica e expressiva para o texto que descreve a conexão.

Easter Eggs (2):

"Você sou eu": A frase "você sou eu só que mulher" escondida. Pode ser um texto com opacity: 0 que vira opacity: 1 no hover/click, ou uma área clicável com um ícone de espelho.

Apelido 1: Um dos apelidos dela (ex: "carolinda") disfarçado em um parágrafo. Ao clicar/tocar, ele se revela.

2. Página "As Brincadeiras": "Nossa Agência de Talentos Absurdos" (/vagas)
Propósito: Destacar as piadas internas e a criatividade de vocês, especialmente os editais de vagas fictícias.

Estética:

Fundo: Roxo claro com padrões sutis de "linhas de formulário" ou "papel de escritório" desenhadas em tom mais escuro.

Elementos: Layout que imita um documento oficial ou um formulário de RH, mas com toques "girly" (adesivos de estrelas, corações, canetas coloridas). Os "títulos das vagas" podem ter uma fonte mais formal, mas o conteúdo ser bem humorado.

Brincadeira da idade: Integrar a brincadeira sobre ela gostar de homens mais velhos de forma sutil, talvez em um "requisito de experiência" invertido.

Easter Eggs (2):

Vaga Principal: Um campo de input onde ela deve digitar "substituta para meu travesseiro".

Apelido 2: Outro apelido dela (ex: "opala") escondido em algum "benefício" ou "habilidade desejada" de uma das vagas fictícias.

3. Página "Os Pontos de Encontro": "Coordenadas do Nosso Início" (/encontros)
Propósito: Reviver os primeiros encontros importantes de forma narrativa.

Estética:

Fundo: Violeta suave, com elementos que remetem a um "mapa de tesouro" ou um álbum de recortes, mas em estilo minimalista e moderno.

Elementos: Pequenos ícones representando o DCE, o café, o apartamento, o cinema. Traços conectando os pontos como se fosse um caminho. Adesivos de estrelas (⭐) e caminhos brilhantes.

Easter Eggs (2):

Pista do Apê: No texto sobre o café que virou apê, esconda as iniciais do seu bairro (ex: "Jd. Botânico") em uma frase, com a cor da letra ligeiramente diferente ou clicável.

Símbolo F1: Um pequeno ícone de capacete de F1 ou uma bandeira quadriculada bem discreta perto da descrição do filme, que ao ser clicado, revela uma pista.

4. Página "O Cosmos de Vocês": "Nossa Astrologia de Conexões" (/astrologia)
Propósito: Celebrar a paixão dela por astrologia e apresentar seu mapa.

Estética:

Fundo: Roxo escuro para evocar o céu noturno, com pequenas estrelas e pontos brilhantes.

Elementos: Um círculo astrológico simplificado no centro (ilustrativo), com os nomes dos planetas e signos do seu mapa. Os símbolos dos signos (♏, ♎, ♌, etc.) podem ser gráficos fofos e estilizados. Adesivos de luas (🌙) e estrelas cadentes.

Easter Eggs (2):

Signo Dela: O símbolo de Libra (♎), ou a palavra "Libra", escondida entre as informações do seu mapa, talvez em um asterisco ou em um item da lista que não seja um planeta/casa.

Seu Signo Mais Presente: Faça o símbolo de Escorpião (♏) em um dos seus planetas (ex: Sol ou Mercúrio) ser clicável, ou peça para ela identificar qual signo aparece mais e clicar no seu símbolo.

5. Página "Os Traços do Futuro": "Nossas Marcas Pessoais" (/tatuagens)
Propósito: Mostrar que você se importa com os planos dela e admira suas escolhas pessoais.

Estética:

Fundo: Rosa pastel com uma textura que remeta a "pele" ou "tela em branco".

Elementos: Ilustrações em fineline (delicadas e com poucos detalhes) da lua crescente com a estrela e das duas borboletas pequenas. Pode haver um efeito de "esboço a lápis" para cada uma. Adesivos de flores delicadas e brilhos.

Easter Eggs (2):

A Fase da Lua: Faça a ilustração da lua crescente ser clicável.

A Contagem das Borboletas: A ilustração das duas borboletas pode ser um easter egg ao ser clicada. Ou, mais sutil, o número "2" escondido próximo a elas.

6. Página "O Sabor da Tradição": "Nosso Arraial Particular" (/junina)
Propósito: Celebrar a paixão dela por Festa Junina.

Estética:

Fundo: Um padrão de xadrez caipira suave, ou um fundo vibrante com bandeirinhas coloridas (rosa, roxo, violeta, com toques de amarelo e laranja) e balões de São João flutuando.

Elementos: Ilustrações de elementos de Festa Junina estilizados (fogueira minimalista, espigas de milho fofas, um coração com um chapéu de palha).

Detalhes: Muitos emojis de frutas vermelhas (🍓, 🍒) e amora (🍇) como decoração.

Easter Eggs (2):

A Data Junina: Um elemento (ex: uma bandeirinha específica ou um texto) que, ao ser clicado, revele a data de 24 de Junho (dia de São João).

O Símbolo Junino: Um balão de São João estilizado que, ao ser clicado, libere uma palavra-chave ou um som sutil de festa.

7. Página Final: "O Tesouro Revelado!" (/final)
Propósito: Apresentar o prêmio com base na quantidade de easter eggs encontrados.

Estética:

Fundo: Um gradiente brilhante de todos os tons de rosa, roxo e violeta, com brilhos e partículas cintilantes.

Elementos: Um grande botão central (inicialmente cinza/desativado se menos de 5 easter eggs) que se torna vibrante (rosa/roxo) e clicável ao atingir 5 easter eggs.

Mecanismo:

Um contador visível de easter eggs encontrados ([X]/10 easter eggs encontrados).

Se easterEggsAchados >= 5: Botão "Descobrir Nosso Primeiro Tesouro!" (ou algo similar).

Se easterEggsAchados == 10 (ou o total): O botão muda de cor (para um dourado ou um roxo mais profundo e brilhante) e o texto muda para "Desvendar Nosso Grande Tesouro!".

Conteúdo do Prêmio: Um componente que exibe a mensagem de parabéns e o prêmio correspondente.

Visão Geral da Implementação em React:
Roteamento: Use react-router-dom para navegar entre as páginas.

Gerenciamento de Estado: Crie um EasterEggProvider com useContext para que todas as páginas possam acessar e atualizar a contagem de easter eggs e o status de cada um.

Pop-ups: O componente PopUp.js será renderizado condicionalmente com base no estado do easter egg encontrado.

Navegação: O NavBar.js terá a lógica para "Próxima" e "Anterior", navegando para a nextPage e prevPage definidas em um array de rotas.

Este plano detalhado deve servir como um excelente guia para a implementação do projeto. Você tem alguma pergunta ou gostaria de aprofundar em alguma parte específica?