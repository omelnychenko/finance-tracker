import HomePage from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("HomePage", () => {
  it("shows the app title", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Finance Tracker" }),
    ).toBeInTheDocument();
  });
});
