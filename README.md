# Simulador de Crédito
Aplicação Web para simulação de crédito de acordo com a entrada provida pelo usuário.

# Exemplos de Uso da Aplicação
Essa aplicação tem por objetivo, a partir das entradas de Valor de Empréstimo, Pagamento em Meses e Data de Nascimento, trazer de retorno para o usuário uma simulação de um empréstimo com parcelas fixas. As informações de retorno são Valor Total a Pagar, Valor Mensal das Parcelas e Total de Juros. Com as informações de entrada, é feito o seguinte cálculo:


![image](https://github.com/user-attachments/assets/4ad690ff-9bc6-4688-b7bc-f6228f98a9a2)


A Taxa de Juros também depende da faixa etária em que o requisitante se encontra:


![image](https://github.com/user-attachments/assets/faeac307-3477-4705-85f9-b5bdd061b813)


Portanto, alguns casos de teste são:
1. Entrada
- Valor do Empréstimo: 10.000
- Prazo de Pagamento (Em meses): 12
- Data de Nascimento: 19/12/2006


Nesse caso, o requisitante tem 18 anos, considerando a data da escrita desta documentação (19/12/2024), entrando na faixa de 5% de juros. Aplicando esses valores na fórmula o resultado é demonstrado abaixo.


2. Saída
- Valor Total a Pagar: 10.272,84
- Valor Mensal das Parcelas: 856,07
- Total de Juros: 272.84


1. Entrada
- Valor do Empréstimo: 15.000,99
- Prazo de Pagamento (Em meses): 36
- Data de Nascimento: 19/12/1980


Nesse caso, o requisitante tem 44 anos, considerando a data da escrita desta documentação (19/12/2024), entrando na faixa de 2% de juros ao ano. Aplicando esses valores na fórmula o resultado é demonstrado abaixo.


2. Saída
- Valor Total a Pagar: 15.468,12
- Valor Mensal das Parcelas: 429,67
- Total de Juros: 467,13

# Instruções de setup
    Node versão 18.20.5
    React versão 18.2.0

# Passo a passo para executar
- Clonar o repositório
- Instalar dependências com o npm install
- Dar início à aplicação pelo comando npm start 

# Decisões de Arquitetura e Estrutura do Projeto
Foi utilizado a linguagem de programação Typescript juntamente com o framework React. Para testes, foi utilizada a biblioteca Jest.

Separação principal do projeto:
- node_modules: pasta em que estão localizadas as dependências do projeto
- public: pasta em que está localizado, por padrão, o ponto de entrada da execução do projeto
- src: pasta em que estão localizadas as configurações do projeto e o código-fonte

Separação da pasta src:
- components: pasta em que estão localizados os componentes do projeto e os seus respectivos arquivos de estilo. Hoje, a separação do projeto se deu por quatro componentes principais: o Main.tsx, Informacoes.tsx, Resultados.tsx e o InputSwitchTheme.tsx. O primeiro é responsável pela renderização da página como um todo. O segundo e o terceiro são componentes utilizados dentro do Main.tsx, o Informacoes.tsx renderizando as informações de entrada do formulário e o Resultados.tsx renderizando as informações de saída do formulário. Já o quarto, é responsável pelo componente que irá realizar a troca de tema de toma a aplicação.
- constants: pasta em que estão localizadas as variáveis ou tratamentos constantes dentro do projeto. Hoje, ele possui apenas o arquivo TaxaJuros.ts, que é responsável por retornar a taxa de juros a ser utilizada de acordo com a idade do requisitante.
- interfaces: pasta em que estão localizadas as interfaces do projeto. Hoje, as duas interfaces utilizadas são DadosEmprestimo.ts e DadosResultadoEmprestimo.ts, o primeiro sendo responsável por estruturar os dados de entrada e o segundo responsável por estruturar os dados de saída.
- tests: pasta em que estão localizados os arquivos de testes unitários e testes de integração. Nesse momento são testados os três arquivos que possuem funcionalidades para os teste unitários: CalcularEmprestimo.test.ts, TaxaJuros.test.ts e ValidarDados.test.ts. Já o teste de integração entre os componentes, é feito no arquivo Main.test.tsx.
- utils: pasta em que estão localizados os arquivos com tratamentos que podem ser abstraídos dos componentes para futura reutilização em outros pontos do sistema. Hoje, os comportamentos existentes são CalcularEmprestimo.ts e ValidarDados.ts.

Essa estrutura por arquivos e pastas tem o objetivo de criar componentes com apenas uma responsabilidade, além desses componentes estarem localizados numa hierarquia de pastas que faça sentido e que facilite a organização do projeto.
