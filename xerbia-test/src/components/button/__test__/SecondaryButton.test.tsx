import { render, screen } from "@testing-library/react";

import SecondaryButton from "../SecondaryButton";

test("Button Secondary is OK", () => {
  render(<SecondaryButton />);
  const linkElement = screen.getByTestId("buttonSecondary");
  expect(linkElement).toBeInTheDocument();
});

test("Button Secondary gets label", () => {
  render(<SecondaryButton label={"Testing Secondary"} />);
  const linkElement = screen.getByTestId("buttonSecondary");
  expect(linkElement).toHaveTextContent("Testing Secondary");
});
