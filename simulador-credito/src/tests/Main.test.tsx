import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Main from "../components/Main";

describe("Main", () => {
  test("Funcionamento do Main e dos componentes filhos", async () => {
    render(<Main />);

    const inputValorEmprestimo = screen.getByTestId("input-valor-emprestimo");
    await userEvent.clear(inputValorEmprestimo);
    await userEvent.type(inputValorEmprestimo, "10000");
    userEvent.tab();

    const inputPrazoMesesPagamento = screen.getByTestId(
      "input-prazo-meses-pagamento"
    );
    await userEvent.type(inputPrazoMesesPagamento, "12");
    userEvent.tab();

    const button = screen.getByRole("button", { name: "Simular" });
    userEvent.click(button);

    await waitFor(() => {
      const inputValorTotal = screen.getByTestId("input-valor-total");

      let valor = (inputValorTotal as HTMLInputElement).value.replace(
        /[^\d,.-]/g,
        ""
      );
      let valorNormalizado = valor.replace(/\./g, "").replace(",", ".");
      expect(parseFloat(valorNormalizado)).toBe(10272.84);

      const inputvalorMensalParcelas = screen.getByTestId(
        "input-valor-mensal-parcelas"
      );

      valor = (inputvalorMensalParcelas as HTMLInputElement).value.replace(
        /[^\d.,-]/g,
        ""
      );
      valorNormalizado = valor.replace(/\./g, "").replace(",", ".");
      expect(parseFloat(valorNormalizado)).toBe(856.07);

      const inputvalorTotalJuros = screen.getByTestId("input-total-juros");

      valor = (inputvalorTotalJuros as HTMLInputElement).value.replace(
        /[^\d.,-]/g,
        ""
      );
      valorNormalizado = valor.replace(/\./g, "").replace(",", ".");
      expect(parseFloat(valorNormalizado)).toBe(272.84);
    });
  });
});
