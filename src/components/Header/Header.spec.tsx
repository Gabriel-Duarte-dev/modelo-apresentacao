import { render } from "@testing-library/react";
import { useContext } from "react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import MainContext from "../../context";
import { Header } from "./index";

describe("Header component", () => {
  it("not should render ButtonSignOut", () => {
    const { queryByTestId } = render(<Header />, { wrapper: MemoryRouter });

    expect(queryByTestId("btnSignout")).not.toBeInTheDocument();
  });
});
