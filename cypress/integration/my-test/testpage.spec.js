describe("https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do", () => {
  describe("Page Loads", () => {
    it("Should load the page", () => {
      cy.visit(
        "https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do"
      );
    });
  });

  describe("Fill Inputs", () => {
    it("Should fill the following inputs (Fecha de disposición, Monto del Crédito, Interés)", () => {
      cy.visit(
        "https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do"
      );
      cy.get("#fechaDisposicion input").clear().type("05/05/2020");
      cy.get("body").click();
      cy.get("#creditAmount").clear().type(20000);
      cy.get("#rate").clear().type(15);
    });
  });

  describe("Choose Select Inputs", () => {
    it("Should select the correct option in the following inputs Forma de pago, Plazo)", () => {
      cy.get("#paymentMethod").select("Mensual");
      cy.get("#period").select("2 años");
    });
  });

  describe("Submit form", () => {
    it("Should submit the form", () => {
      cy.contains("Calcular").click();
      cy.contains("Ahora no").click();
    });
  });

  describe("Check 24 rows", () => {
    it("Should check if there are 24 rows.", () => {
      cy.get("#resultadosSimulador").find("tr").should("have.length", 25);
    });
  });
});
