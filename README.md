# SimuladorCredito
Aplicação Web para simulação de crédito de acordo com a entrada provida pelo usuário.

# Documentação
Essa aplicação tem por objetivo, a partir das entradas de Valor de Empréstimo, Pagamento em Meses e Data de Nascimento, trazer de retorno para o usuário uma simulação de um empréstimo com parcelas fixas. As informações de retorno são Valor Total a Pagar, Valor Mensal das Parcelas e Total de Juros.

# Configuração
    Node versão 18.20.5
    React versão 18.2.0
    Biblioteca web-vitals
    Biblioteca primereact

# Passo a passo para executar
    Clonar o repositório
    Instalar dependências com o npm install
    Dar start na aplicação pelo comando npm start

# Decisões de Arquitetura
Foi utilizado o Typescript ao invés do Javacript por ser uma linguagem tipada, juntamente com o framework React.

Decidi separar o projeto da seguinte forma:
    node_modules: as dependências do projeto
    public: por padrão, o ponto de entrada da execução do projeto
    src: as configurações e o código-fonte

Adentrando no src, o Main.tsx e o Main.css é onde está o corpo da aplicação. Ou seja, toda a renderização da página está sendo renderizada nesse componente. 

Esse componente possui alguns comportamentos, que foram abstraídos para as seguintes pastas: constants, interfaces e utils.
    constants: local destinado para o armazenamento de variáveis constantes, que dificilmente sofrerão alteração.
        TaxaJuros.ts: nesse componente é armazenado a lógica que faz o cálculo da idade do requisitante e retorna a taxa de juros de acordo com a faixa etária.
    interfaces: local destinado para o armazenamento de interfaces de dados.
        DadosEmprestimo.ts: nesse componente é armazenado a estrutura de dados para a simulação do empréstimo.
        DadosResultadoEmprestimo.ts: nesse componente é armazenado a estrutura de dados de resposta após a simulação do empréstimo. 
    utils: local destinado para o armazenamento de funções úteis, que podem ser utilizadas em outros componentes.
        CalcularEmprestimo.ts: nesse componente é armazenado o cálculo do empréstimo a partir dos valores de entrada, definindo os valores de saída.
        ValidarDados.ts: nesse componente é armazenada a função responsável pela validação dos dados de entrada do usuário.

Essa estrutura por arquivos e pastas tem o objetivo de criar componentes com apenas uma responsabilidade, além desses componentes estarem localizados numa hierarquia de pastas que faça sentido e que facilite a organização do projeto.
