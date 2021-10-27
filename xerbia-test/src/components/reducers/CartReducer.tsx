import * as actions from "../actions/Types";

const CartReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      state = [...state, action.payload];

      let parsedState = state.map((row: any) => {
        const { isbn, ...rest } = row;
        return { id: isbn, ...rest };
      });

      return parsedState;

    case actions.REMOVE_FROM_CART:
      action.payload.map((removedElement: string) => {
        if (state.findIndex((item: any) => item.id === removedElement) !== -1) {
          state = state.filter((item: any) => item.id !== removedElement);

          return state;
        }
      });

      return state;
    default:
      return state;
  }
};

export default CartReducer;
