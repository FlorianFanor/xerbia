import React from "react";
import { render, screen } from "@testing-library/react";
import PrimaryButton from "../PrimaryButton";

test("Button Primary is OK", () => {
  render(<PrimaryButton />);
  const linkElement = screen.getByTestId("buttonPrimary");
  expect(linkElement).toBeInTheDocument();
});

test("Button Primary gets label", () => {
  render(<PrimaryButton label={"Testing"} />);
  const linkElement = screen.getByTestId("buttonPrimary");
  expect(linkElement).toHaveTextContent("Testing");
});
