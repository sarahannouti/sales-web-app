import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import CountersPage from "./CountersPage";

describe("CountersPage", () => {
  it("renders a title and some Counter", () => {
    render(<CountersPage />);

    expect(
      screen.getByRole("heading", { name: "CountersPage", level: 1 }),
    ).toBeInTheDocument();
  });
});
