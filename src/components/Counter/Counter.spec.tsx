import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  describe('initialize with defaultCount of 0 and description of "My Counter"', () => {
    beforeEach(() => {
      // eslint-disable-next-line testing-library/no-render-in-setup
      render(<Counter defaultCount={0} description="My Counter" />);
    });

    it("renders current count as 0", () => {
      expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
    });

    it("renders description", () => {
      expect(screen.getByText(/My Counter/)).toBeInTheDocument();
    });

    describe("when clicking the + button", () => {
      beforeEach(() => {
        fireEvent.click(screen.getByRole("button", { name: "Increment" }));
      });

      it("increments the count", () => {
        expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
      });
    });

    describe("when clicking the - button", () => {
      beforeEach(() => {
        fireEvent.click(screen.getByRole("button", { name: "Decrement" }));
      });

      it("increments the count", () => {
        expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
      });
    });

    describe("when clicking the - button twice", () => {
      beforeEach(() => {
        fireEvent.click(screen.getByRole("button", { name: "Decrement" }));
        fireEvent.click(screen.getByRole("button", { name: "Decrement" }));
      });

      it("increments the count", () => {
        expect(screen.getByText("Current Count: -2")).toBeInTheDocument();
      });
    });

    describe("when clicking the - button thrice", () => {
      beforeEach(() => {
        fireEvent.click(screen.getByRole("button", { name: "Decrement" }));
        fireEvent.click(screen.getByRole("button", { name: "Decrement" }));
        fireEvent.click(screen.getByRole("button", { name: "Decrement" }));
      });

      it("increments the count", () => {
        expect(screen.getByText("Current Count: -3")).toBeInTheDocument();
      });
    });
  });
});
