import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from "./action";
import cartItems from "./cart-items";

function reducer(state, action) {
  console.log({ state, action });

    if (action.type === "CLEAR_CART") {
    
      return {
        ...state,
        cart: []
      };
      return state;
    }

    if (action.type === DECREASE)
    {
        console.log("decrease value");
    }
   
    if (action.type === INCREASE) {
      console.log("increase value");
    }

    if (action.type === REMOVE) {
      //console.log("Remove value");
      console.log(action.payload.id);
      return {
         ...state,
         cart: state.cart.filter((cartItems) => 
         cartItems.id !== action.payload.id)
      };
    }

    // switch(action.type) {
    //     case CLEAR_CART: 
    //     return {
    //     ...state,
    //     cart: []
    //   };
    //   default: 
    //   return state;
    // }

  //   if (action.type === "INCREASE") {
  //     return {
  //       ...state,
  //       count: state.count + 1,
  //     };
  // console.log("it works!!");
  //   }

  // if (action.type === "RESET") {

  //   return {
  //     ...state,
  //     count: 0,
  //   };

  // }

  // if (action.type === "CHANGE_NAME") {
  //   return {
  //     ...state,
  //     count: 0,
  //   };
  // }

  return state;
  console.log("React Redux");
}

export default reducer;
