import { taxaJuros } from "../constants/TaxaJuros";

describe("TaxaJuros", () => {
  test("Solicitante com até 25 anos (22 anos)", () => {
    const dataNascimento = new Date();
    dataNascimento.setFullYear(dataNascimento.getFullYear() - 22);

    const result = taxaJuros(dataNascimento);

    expect(result).toBe(0.05);
  });

  test("Solicitante com até 25 anos (25 anos)", () => {
    const dataNascimento = new Date();
    dataNascimento.setFullYear(dataNascimento.getFullYear() - 25);

    const result = taxaJuros(dataNascimento);

    expect(result).toBe(0.05);
  });

  test("Solicitante com até 25 anos (25 anos - Faz aniversário amanhã)", () => {
    const dataNascimento = new Date();

    dataNascimento.setFullYear(dataNascimento.getFullYear() - 26);
    dataNascimento.setDate(dataNascimento.getDate() + 1);

    const result = taxaJuros(dataNascimento);

    expect(result).toBe(0.05);
  });

  test("Solicitante com até 25 anos (25 anos - Ontem)", () => {
    const dataNascimento = new Date();

    dataNascimento.setFullYear(dataNascimento.getFullYear() - 25);
    dataNascimento.setDate(dataNascimento.getDate() - 1);

    const result = taxaJuros(dataNascimento);

    expect(result).toBe(0.05);
  });

  test("Solicitante entre 26 e 40 anos (26 anos)", () => {
    const dataNascimento = new Date();
    dataNascimento.setFullYear(dataNascimento.getFullYear() - 26);

    const result = taxaJuros(dataNascimento);

    expect(result).toBe(0.03);
  });

  test("Solicitante entre 26 e 40 anos (37 anos)", () => {
    const dataNascimento = new Date();
    dataNascimento.setFullYear(dataNascimento.getFullYear() - 37);

    const result = taxaJuros(dataNascimento);

    expect(result).toBe(0.03);
  });

  test("Solicitante entre 26 e 40 anos (40 anos)", () => {
    const dataNascimento = new Date();
    dataNascimento.setFullYear(dataNascimento.getFullYear() - 40);

    const result = taxaJuros(dataNascimento);

    expect(result).toBe(0.03);
  });

  test("Solicitante entre 41 e 60 anos (41 anos)", () => {
    const dataNascimento = new Date();
    dataNascimento.setFullYear(dataNascimento.getFullYear() - 41);

    const result = taxaJuros(dataNascimento);

    expect(result).toBe(0.02);
  });

  test("Solicitante entre 41 e 60 anos (59 anos)", () => {
    const dataNascimento = new Date();
    dataNascimento.setFullYear(dataNascimento.getFullYear() - 59);

    const result = taxaJuros(dataNascimento);

    expect(result).toBe(0.02);
  });

  test("Solicitante entre 41 e 60 anos (60 anos)", () => {
    const dataNascimento = new Date();
    dataNascimento.setFullYear(dataNascimento.getFullYear() - 60);

    const result = taxaJuros(dataNascimento);

    expect(result).toBe(0.02);
  });

  test("Solicitante acima de 60 anos", () => {
    const dataNascimento = new Date();
    dataNascimento.setFullYear(dataNascimento.getFullYear() - 89);

    const result = taxaJuros(dataNascimento);

    expect(result).toBe(0.04);
  });
});
