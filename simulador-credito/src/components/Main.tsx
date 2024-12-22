import React, { useState } from "react";
import "./Main.css";

import { DadosEmprestimo } from "../interfaces/DadosEmprestimo";
import { DadosResultadoEmprestimo } from "../interfaces/DadosResultadoEmprestimo";

import { calcularEmprestimo } from "../utils/CalcularEmprestimo";
import { validarDados } from "../utils/ValidarDados";

import { Card } from "primereact/card";
import { Button } from "primereact/button";

import Informacoes from "./Informacoes";
import Resultados from "./Resultados";

export default function Main() {
  const [dados, setDados] = useState<DadosEmprestimo>({
    valorEmprestimo: 0,
    prazoMesesPagamento: 0,
    dataNascimento: new Date(),
  });

  const [dadosResultado, setDadosResultado] =
    useState<DadosResultadoEmprestimo>({
      valorTotal: 0,
      valorMensalParcelas: 0,
      valorTotalJuros: 0,
    });

  const [erro, setErro] = useState<boolean>(false);

  const handleUpdate = (novosDados: DadosEmprestimo) => {
    setDados(novosDados);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const ehValido = validarDados(dados);

    setErro(!ehValido);

    setDadosResultado({
      valorTotal: 0,
      valorMensalParcelas: 0,
      valorTotalJuros: 0,
    });

    if (!ehValido) return;

    const valorParcela = calcularEmprestimo(dados);

    const valorTotal = valorParcela * dados.prazoMesesPagamento;

    setDadosResultado({
      valorTotal: valorTotal,
      valorMensalParcelas: valorParcela,
      valorTotalJuros: valorTotal - dados.valorEmprestimo,
    });
  };

  return (
    <div className="container">
      <header>
        <h1>Simulação de Crédito</h1>
        <span>
          Faça uma simulação de empréstimo de forma rápida e precisa. Nós
          precisamos de apenas três informações para te trazer a nossa{" "}
          <strong>melhor proposta</strong>.
        </span>
      </header>
      <div className="body">
        <Card>
          <div className="forms">
            <Informacoes dadosEmprestimo={dados} handleUpdate={handleUpdate} />
            <Resultados dadosResultadoEmprestimo={dadosResultado} />
          </div>
          <div className="mensagem-erro">
            <small style={{ display: erro ? "inline" : "none" }}>
              *Preencha todos os dados para a simulação
            </small>
          </div>
          <div className="button-simular">
            <Button label="Simular" onClick={handleSubmit} />
          </div>
        </Card>
      </div>
    </div>
  );
}
