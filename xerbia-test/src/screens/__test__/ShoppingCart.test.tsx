import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import ShoppingCart from "../ShoppingCart";

import Store from "../../components/store/store";

test("Check if total price is 0 at start", () => {
  const { getByTestId } = render(
    <Provider store={Store}>
      <ShoppingCart />
    </Provider>
  );
  const total = getByTestId("totalPrice");
  expect(total.innerHTML).toBe("€ 0.00 ");
});

test("Check subtotal is 0 at start", () => {
  const { getByTestId } = render(
    <Provider store={Store}>
      <ShoppingCart />
    </Provider>
  );
  const total = getByTestId("subtotal");
  expect(total.innerHTML).toContain("€ 0");
});

test("Check if offer is 0 at start", () => {
  const { getByTestId } = render(
    <Provider store={Store}>
      <ShoppingCart />
    </Provider>
  );
  const total = getByTestId("offers");
  expect(total.innerHTML).toContain("€ 0");
});
