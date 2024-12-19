import { DadosEmprestimo } from "../interfaces/DadosEmprestimo";

export function validarDados(dados: DadosEmprestimo): boolean {
  const hoje = new Date();

  if (
    dados.dataNascimento === null ||
    dados.dataNascimento.getDate() <= 0 ||
    dados.dataNascimento.getMonth() <= 0 ||
    dados.dataNascimento.getFullYear() <= 0 ||
    dados.dataNascimento > hoje
  )
    return false;

  if (dados.prazoMesesPagamento === null || dados.prazoMesesPagamento <= 0)
    return false;

  if (dados.valorEmprestimo === null || dados.valorEmprestimo <= 0)
    return false;

  return true;
}
