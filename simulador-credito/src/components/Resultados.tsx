import React from "react";
import "./Resultados.css";

import { DadosResultadoEmprestimo } from "../interfaces/DadosResultadoEmprestimo.ts";

import { InputNumber } from "primereact/inputnumber";

interface ResultadosProps {
  dadosResultadoEmprestimo: DadosResultadoEmprestimo;
}

export default function Resultados({
  dadosResultadoEmprestimo,
}: ResultadosProps) {
  return (
    <div className="resultados">
      <h4>Resultados</h4>
      <div className="resultados-inputs">
        <div className="resultados-input">
          <label>Valor Total a Pagar</label>
          <InputNumber
            mode="currency"
            currency="BRL"
            locale="pt-BR"
            disabled
            value={dadosResultadoEmprestimo?.valorTotal}
          />
        </div>
        <div className="resultados-input">
          <label>Valor Mensal das Parcelas</label>
          <InputNumber
            mode="currency"
            currency="BRL"
            locale="pt-BR"
            disabled
            value={dadosResultadoEmprestimo?.valorMensalParcelas}
          />
        </div>
        <div className="resultados-input">
          <label>Total de Juros</label>
          <InputNumber
            mode="currency"
            currency="BRL"
            locale="pt-BR"
            disabled
            value={dadosResultadoEmprestimo?.valorTotalJuros}
          />
        </div>
      </div>
    </div>
  );
}
