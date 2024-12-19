import { taxaJuros } from "../constants/TaxaJuros.ts";
import { DadosEmprestimo } from "../interfaces/DadosEmprestimo.ts";

export function calcularEmprestimo(dados: DadosEmprestimo): number {
  const taxaJurosMensal = taxaJuros(dados.dataNascimento) / 12.0;

  return (
    (dados.valorEmprestimo * taxaJurosMensal) /
    (1 - Math.pow(1 + taxaJurosMensal, -dados.prazoMesesPagamento))
  );
}
