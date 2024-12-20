//import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
//import Main from "../components/Main.tsx";
//import userEvent from "@testing-library/user-event";

describe("Main", () => {
  test("Funcionamento do Main e dos componentes filhos", async () => {
    // Não foi possível concluir pois o InputNumber do inputValorEmprestimo está como mode=currency para aparecer o R$. Seria necessário estudar o userEvent mais a fundo para viabilizar esse teste de integração.

    /*
    render(<Main />);

    const inputValorEmprestimo = screen.getByTestId("input-valor-emprestimo");
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
      
      let valor = inputValorTotal.value.replace(/[^\d,.-]/g, "");
      let valorNormalizado = valor.replace(/\./g, "").replace(",", ".");
      expect(parseFloat(valorNormalizado)).toBe(10272.84);
      
      const inputvalorMensalParcelas = screen.getByTestId(
        "input-valor-mensal-parcelas"
      );
      
      valor = inputvalorMensalParcelas.value.replace(/[^\d.,-]/g, "");
      valorNormalizado = valor.replace(/\./g, "").replace(",", ".");
      expect(parseFloat(valorNormalizado)).toBe(856.07);
      
      const inputvalorTotalJuros = screen.getByTestId("input-total-juros");
      
      valor = inputvalorTotalJuros.value.replace(/[^\d.,-]/g, "");
      valorNormalizado = valor.replace(/\./g, "").replace(",", ".");
      expect(parseFloat(valorNormalizado)).toBe(272.84);
    });
    */
  });
});
