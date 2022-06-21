import { render } from "@testing-library/react";
import { Header } from "./index";

describe("Header component", () => {
  it("should render ButtonSignOut", () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId("btnSignout")).toBeInTheDocument();
  });
});
