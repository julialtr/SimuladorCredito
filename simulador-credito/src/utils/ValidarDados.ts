import { DadosEmprestimo } from "../interfaces/DadosEmprestimo";

export function validarDados(dados: DadosEmprestimo): boolean {
  if (dados.dataNascimento === null || !dados.dataNascimento.getTime())
    return false;

  if (dados.prazoMesesPagamento === null || !dados.prazoMesesPagamento)
    return false;

  if (dados.valorEmprestimo === null || !dados.valorEmprestimo) return false;

  return true;
}
