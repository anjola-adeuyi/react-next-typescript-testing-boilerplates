import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

it('renders hello world', () => {
  render(<Hello />);
  const linkElement =  screen.getByText(/Hell/);
  expect(linkElement).toBeInTheDocument();
})