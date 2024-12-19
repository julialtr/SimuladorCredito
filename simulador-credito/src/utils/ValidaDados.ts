import { DadosEmprestimo } from "../interfaces/dadosEmprestimo";

export function validaDados(
  dados: DadosEmprestimo
): boolean {

    if (dados.dataNascimento === null || !dados.dataNascimento.getTime())
        return false;

    if (dados.prazoMesesPagamento === null || !dados.prazoMesesPagamento)
        return false;

    if (dados.valorEmprestimo === null || !dados.valorEmprestimo)
        return false;

    return true;
}
