import { taxaJuros } from "../constants/TaxaJuros";
import { DadosEmprestimo } from "../interfaces/DadosEmprestimo";

export function calcularEmprestimo(dados: DadosEmprestimo): number {
  const taxaJurosMensal = taxaJuros(dados.dataNascimento) / 12;

  return parseFloat(
    (
      (dados.valorEmprestimo * taxaJurosMensal) /
      (1 - Math.pow(1 + taxaJurosMensal, -dados.prazoMesesPagamento))
    ).toFixed(2)
  );
}
