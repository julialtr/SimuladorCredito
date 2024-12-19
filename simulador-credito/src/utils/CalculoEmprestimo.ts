import { taxaJuros } from "../constants/taxaJuros.ts";

export function calculoEmprestimo(
  valorEmprestimo: number,
  prazoMesesPagamento: number,
  dataNascimento: Date
): number {
  const taxaJurosMensal = taxaJuros(dataNascimento) / 12;

  return (
    (valorEmprestimo * taxaJurosMensal) /
    (1 - Math.pow(1 + taxaJurosMensal, -prazoMesesPagamento))
  );
}
