import React from "react";
import "./Resultados.css";

import { DadosResultadoEmprestimo } from "../interfaces/DadosResultadoEmprestimo";

import { InputNumber } from "primereact/inputnumber";

interface ResultadosProps {
  dadosResultadoEmprestimo: DadosResultadoEmprestimo;
  darkMode: boolean;
}

export default function Resultados({
  dadosResultadoEmprestimo,
  darkMode,
}: ResultadosProps) {
  return (
    <div className="resultados" data-theme={darkMode ? "dark" : "light"}>
      <h4>Resultados</h4>
      <div className="resultados-inputs">
        <div className="resultados-input">
          <label>Valor Total a Pagar</label>
          <InputNumber
            data-testid="input-valor-total"
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
            data-testid="input-valor-mensal-parcelas"
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
            data-testid="input-total-juros"
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
