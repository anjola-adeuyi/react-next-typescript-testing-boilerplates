import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe('initialize with defaultCount of 0 and description of "My Counter"', () => {
  it("defaultCount=0, then counter = 1", () => {
    render(<Counter defaultCount={0} description="My Counter" />);
    expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
    screen.getByText(/My Counter/);
  });

  it("defaultCount=0, and + clicked then counter = 1", () => {
    render(<Counter defaultCount={0} description="My Counter" />);
    fireEvent.click(screen.getByRole("button", { name: "+" }));
    expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
  });

  it("defaultCount=0, and - clicked then counter = -1", () => {
    render(<Counter defaultCount={0} description="My Counter" />);
    fireEvent.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
  });
});
