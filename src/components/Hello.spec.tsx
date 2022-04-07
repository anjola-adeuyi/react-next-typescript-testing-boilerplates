import { render } from "@testing-library/react";
import Hello from "./Hello";

it('renders hello world', () => {
  const { getByText } = render(<Hello />);
  const linkElement = getByText(/Hell/i);
  expect(linkElement).toBeInTheDocument();
})