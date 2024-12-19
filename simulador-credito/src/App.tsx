import React, { useState } from "react";
import "./App.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import { DadosEmprestimo } from "./interfaces/dadosEmprestimo";
import { DadosResultadoEmprestimo } from "./interfaces/dadosResultadoEmprestimo";
import { calculoEmprestimo } from "./utils/CalculoEmprestimo.ts";

import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";
import { validaDados } from "./utils/ValidaDados.ts";

export default function App() {
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

  const handleChange = (name: string, value: any) => {
    setDados((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const ehValido = validaDados(dados);

    setErro(!ehValido);

    setDadosResultado({
      valorTotal: 0,
      valorMensalParcelas: 0,
      valorTotalJuros: 0,
    });

    if (!ehValido) return;

    const valorParcela = calculoEmprestimo(
      dados.valorEmprestimo,
      dados.prazoMesesPagamento,
      dados.dataNascimento
    );

    const valorTotal = valorParcela * dados.prazoMesesPagamento;

    setDadosResultado({
      valorTotal: valorTotal,
      valorMensalParcelas: valorParcela,
      valorTotalJuros: valorTotal - dados.valorEmprestimo,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simulação de Crédito</h1>
        <span>
          Faça uma simulação de empréstimo de forma rápida e precisa. Nós
          precisamos de apenas três informações para te trazer a nossa{" "}
          <strong>melhor proposta</strong>.
        </span>
      </header>
      <div className="App-body">
        <Card>
          <div className="App-body-forms">
            <div className="App-body-inputs">
              <h4>Informações</h4>
              <div className="App-body-inputs-container">
                <div className="App-body-input">
                  <label>Valor do Empréstimo</label>
                  <InputNumber
                    min={0}
                    mode="currency"
                    currency="BRL"
                    locale="pt-BR"
                    value={dados?.valorEmprestimo}
                    onChange={(e) => handleChange("valorEmprestimo", e.value)}
                  />
                </div>
                <div className="App-body-input">
                  <label>Prazo de Pagamento (Em meses)</label>
                  <InputNumber
                    min={0}
                    max={120}
                    useGrouping={false}
                    value={dados?.prazoMesesPagamento}
                    onChange={(e) =>
                      handleChange("prazoMesesPagamento", e.value)
                    }
                  />
                </div>
                <div className="App-body-input">
                  <label>Data de Nascimento</label>
                  <Calendar
                    showIcon
                    dateFormat="dd/mm/yy"
                    maxDate={new Date()}
                    value={dados?.dataNascimento}
                    onChange={(e) => handleChange("dataNascimento", e.value)}
                  />
                </div>
              </div>
            </div>
            <div className="App-body-inputs">
              <h4>Resultados</h4>
              <div className="App-body-inputs-container">
                <div className="App-body-input">
                  <label>Valor Total a Pagar</label>
                  <InputNumber
                    mode="currency"
                    currency="BRL"
                    locale="pt-BR"
                    disabled
                    value={dadosResultado?.valorTotal}
                  />
                </div>
                <div className="App-body-input">
                  <label>Valor Mensal das Parcelas</label>
                  <InputNumber
                    mode="currency"
                    currency="BRL"
                    locale="pt-BR"
                    disabled
                    value={dadosResultado?.valorMensalParcelas}
                  />
                </div>
                <div className="App-body-input">
                  <label>Total de Juros</label>
                  <InputNumber
                    mode="currency"
                    currency="BRL"
                    locale="pt-BR"
                    disabled
                    value={dadosResultado?.valorTotalJuros}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="App-body-erro">
            <small style={{ display: erro ? "inline" : "none" }}>
              *Preencha todos os dados para a simulação
            </small>
          </div>
          <div className="App-body-button">
            <Button label="Simular" onClick={handleSubmit} />
          </div>
        </Card>
      </div>
    </div>
  );
}
