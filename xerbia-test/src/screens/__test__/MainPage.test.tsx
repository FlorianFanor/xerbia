import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MainPage from "../MainPage";
import LibraryCard from "../../components/LibraryCard";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore([]);

test("Search bar is present", () => {
  const { getByTestId } = render(<MainPage />);
  const recherche = getByTestId("recherche") as HTMLInputElement;
  expect(recherche).toBeInTheDocument();
});

test("Search has default value blank", () => {
  const { getByTestId } = render(<MainPage />);
  const recherche = getByTestId("recherche") as HTMLInputElement;
  expect(recherche.value).toBe("");
});

test("Insert a value in the Search bar", () => {
  const { getByTestId } = render(<MainPage />);
  const recherche = getByTestId("recherche") as HTMLInputElement;
  fireEvent.change(recherche, { target: { value: "Henri" } });
  expect(recherche.value).toBe("Henri");
});
