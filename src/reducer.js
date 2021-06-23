import {
  INCREASE,
  DECREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from "./action";
import cartItems from "./cart-items";

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

function reducer(state = initialStore, action) {
  console.log({ state, action });

    if (action.type === "CLEAR_CART") {
    
      return {
        ...state,
        cart: []
      };
      return state;
    }

    if (action.type === DECREASE)
     //  if(action.payload.amount === 1) {
      //    console.log("heyy");
    {
        console.log("decrease value");
       let tempCart = state.cart.map((cartItem) => {
           if (cartItem.id === action.payload.id) {
                   cartItem = { ...cartItem, amount: cartItem.amount - 1 };
                 }
                 return cartItem;

                 //console.log(cartItem);
               });
          
        return {
          ...state,
          cart: tempCart
        }
    }
   
    if (action.type === INCREASE) {
      console.log("increase value");
      let tempCart = state.cart.map((cartItem) => {
        if(cartItem.id === action.payload.id)
        {
          cartItem = {...cartItem, amount: cartItem.amount + 1};
        }
        return cartItem;  
      
        //console.log(cartItem);
      })
      return {
        ...state,
        cart: tempCart
      }
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
     if (action.type == GET_TOTALS) {
          console.log("Totals")
          let { total, amount} = state.cart.reduce((cartTotal, cartItem) => 
          {
            const { price, amount} = cartItem;
            const itemTotal = price * amount;

             cartTotal.total += itemTotal;
            cartTotal.amount += amount;
            return cartTotal;
          }, {
            total: 0,
            amount: 0
          });

          total = parseFloat(total.toFixed(2));
          return {
            ...state,
            total, amount
          }
     } 

     if (action.type === TOGGLE_AMOUNT) 
     {
      return {
        ...state,
        cart: state.cart.map(cartItem => {
          if(cartItem.id === action.payload.id)
          {
           if(action.payload.toggle === 'inc')
           {
             return (cartItem = {...cartItem, amount: cartItem.amount + 1});
           } 

           if (action.payload.toggle === "dec") {
             return (cartItem = { 
               ...cartItem, 
               amount: cartItem.amount - 1 });
           } 
          }
          return cartItem  
        })
      }
     } 
     return state;
  console.log("React Redux");
}

export default reducer;
