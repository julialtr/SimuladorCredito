import React, { useEffect, useState } from "react";
import "./Informacoes.css";

import { DadosEmprestimo } from "../interfaces/DadosEmprestimo";

import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";

interface InformacoesProps {
  dadosEmprestimo: DadosEmprestimo;
  darkMode: boolean;
  handleUpdate: (novosDados: DadosEmprestimo) => void;
}

export default function Informacoes({
  dadosEmprestimo,
  darkMode,
  handleUpdate,
}: InformacoesProps) {
  const [dados, setDados] = useState<DadosEmprestimo>(dadosEmprestimo);

  const handleChange = (name: string, value: any) => {
    setDados((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    handleUpdate(dados);
  }, [dados, handleUpdate]);

  return (
    <div className="informacoes" data-theme={darkMode ? "dark" : "light"}>
      <h4>Informações</h4>
      <div className="informacoes-inputs">
        <div className="informacoes-input">
          <label>Valor do Empréstimo</label>
          <InputNumber
            data-testid="input-valor-emprestimo"
            min={0}
            mode="currency"
            currency="BRL"
            locale="pt-BR"
            value={dados?.valorEmprestimo}
            onChange={(e) => handleChange("valorEmprestimo", e.value)}
          />
        </div>
        <div className="informacoes-input">
          <label>Prazo de Pagamento (Em meses)</label>
          <InputNumber
            data-testid="input-prazo-meses-pagamento"
            min={0}
            useGrouping={false}
            value={dados?.prazoMesesPagamento}
            onChange={(e) => handleChange("prazoMesesPagamento", e.value)}
          />
        </div>
        <div className="informacoes-input">
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
  );
}
