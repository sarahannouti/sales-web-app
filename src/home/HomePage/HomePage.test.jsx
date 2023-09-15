import { render, screen, waitFor } from "../../test-utils";
import { describe, expect, it } from "vitest";

import { HomePage } from "./";

describe("HomePage", () => {
  it("renders a product list and its own search engine and filters", async () => {
    render(<HomePage />, { initialEntries: ["/"] });
    expect(
      screen.getByRole("textbox", { name: "Recherche" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("radiogroup", { name: "Condition" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Toutes" })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Neuf" })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Occasion" })).toBeInTheDocument();

    expect(screen.getByRole("progressbar")).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument(),
    );

    expect(screen.getByRole("grid")).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: "Image produit" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Description" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Prix" }),
    ).toBeInTheDocument();
    /*expect(
      screen.getByRole("columnheader", { name: "Stock" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "État" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Actions" }),
    ).toBeInTheDocument();*/

    expect(
      screen.getByRole("link", { name: "Rustique Plastique Souris" }),
    ).toBeInTheDocument();
  });
});
