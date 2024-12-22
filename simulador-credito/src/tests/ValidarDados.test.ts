import { DadosEmprestimo } from "../interfaces/DadosEmprestimo";
import { validarDados } from "../utils/ValidarDados";

describe("ValidarDados", () => {
  test("Data de Nascimento vazia", () => {
    const dataNascimento = new Date();
    dataNascimento.setFullYear(0);
    dataNascimento.setMonth(0);
    dataNascimento.setDate(0);

    const dados = {
      valorEmprestimo: 10000,
      prazoMesesPagamento: 12,
      dataNascimento: dataNascimento,
    };

    const result = validarDados(dados as DadosEmprestimo);

    expect(result).toBe(false);
  });

  test("Data de Nascimento inválida", () => {
    const dataNascimento = new Date();
    dataNascimento.setFullYear(2030);
    dataNascimento.setMonth(15);
    dataNascimento.setDate(45);

    const dados = {
      valorEmprestimo: 10000,
      prazoMesesPagamento: 12,
      dataNascimento: dataNascimento,
    };

    const result = validarDados(dados as DadosEmprestimo);

    expect(result).toBe(false);
  });

  test("Prazo de Pagamento (Em meses) vazio", () => {
    const dataNascimento = new Date();

    const dados = {
      valorEmprestimo: 10000,
      prazoMesesPagamento: 0,
      dataNascimento: dataNascimento,
    };

    const result = validarDados(dados as DadosEmprestimo);

    expect(result).toBe(false);
  });

  test("Prazo de Pagamento (Em meses) inválido", () => {
    const dataNascimento = new Date();

    const dados = {
      valorEmprestimo: 10000,
      prazoMesesPagamento: -1,
      dataNascimento: dataNascimento,
    };

    const result = validarDados(dados as DadosEmprestimo);

    expect(result).toBe(false);
  });

  test("Valor do Empréstimo vazio", () => {
    const dataNascimento = new Date();

    const dados = {
      valorEmprestimo: 0,
      prazoMesesPagamento: 12,
      dataNascimento: dataNascimento,
    };

    const result = validarDados(dados as DadosEmprestimo);

    expect(result).toBe(false);
  });

  test("Valor do Empréstimo inválido", () => {
    const dataNascimento = new Date();

    const dados = {
      valorEmprestimo: -150,
      prazoMesesPagamento: 12,
      dataNascimento: dataNascimento,
    };

    const result = validarDados(dados as DadosEmprestimo);

    expect(result).toBe(false);
  });

  test("Dados válidos", () => {
    const dataNascimento = new Date();

    const dados = {
      valorEmprestimo: 10000,
      prazoMesesPagamento: 12,
      dataNascimento: dataNascimento,
    };

    const result = validarDados(dados as DadosEmprestimo);

    expect(result).toBe(true);
  });
});
