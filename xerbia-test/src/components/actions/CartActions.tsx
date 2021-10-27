import { ADD_TO_CART, REMOVE_FROM_CART } from "./Types";

export const addToCart = (value: any) => ({
  type: ADD_TO_CART,
  payload: value,
});

export const removeFromCart = (value: any) => ({
  type: REMOVE_FROM_CART,
  payload: value,
});
