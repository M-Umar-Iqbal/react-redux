import { ADD_TO_CART, REMOVE_TO_CART } from '../constants';

// const initialState = {
//   cartData: []
// };
export default function cartItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      // console.warn('reducer', action)
      console.log("Previous State Data", ...state);
      return [
        ...state,
        { itemData: action.payload }
      ];

    case REMOVE_TO_CART:
      // console.warn('reducer', action)
      state =
        state.filter((item) => item.itemData.id !== action.data.id)
    default:
      return state;
  }
}
