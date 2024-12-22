import { DadosEmprestimo } from "../interfaces/DadosEmprestimo";
import { calcularEmprestimo } from "../utils/CalcularEmprestimo";

describe("CalcularEmprestimo", () => {
  test("Solicitante com até 25 anos", () => {
    const dataNascimento = new Date();
    dataNascimento.setFullYear(dataNascimento.getFullYear() - 18);

    const dados = {
      valorEmprestimo: 10000,
      prazoMesesPagamento: 12,
      dataNascimento: dataNascimento,
    };

    const result = calcularEmprestimo(dados as DadosEmprestimo);

    expect(result).toBe(856.07);
  });

  test("Solicitante entre 26 e 40 anos", () => {
    const dataNascimento = new Date();
    dataNascimento.setFullYear(dataNascimento.getFullYear() - 39);

    const dados = {
      valorEmprestimo: 20000,
      prazoMesesPagamento: 24,
      dataNascimento: dataNascimento,
    };

    const result = calcularEmprestimo(dados as DadosEmprestimo);

    expect(result).toBe(859.62);
  });

  test("Solicitante entre 41 e 60 anos", () => {
    const dataNascimento = new Date();
    dataNascimento.setFullYear(dataNascimento.getFullYear() - 44);

    const dados = {
      valorEmprestimo: 15000.99,
      prazoMesesPagamento: 36,
      dataNascimento: dataNascimento,
    };

    const result = calcularEmprestimo(dados as DadosEmprestimo);

    expect(result).toBe(429.67);
  });

  test("Solicitante acima de 60 anos", () => {
    const dataNascimento = new Date();
    dataNascimento.setFullYear(dataNascimento.getFullYear() - 73);

    const dados = {
      valorEmprestimo: 30123.56,
      prazoMesesPagamento: 60,
      dataNascimento: dataNascimento,
    };

    const result = calcularEmprestimo(dados as DadosEmprestimo);

    expect(result).toBe(554.77);
  });
});
