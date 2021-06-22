import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
//import { INCREASE, DECREASE } from "./action"; 
import  reducer  from "./reducer";
import { Provider } from "react-redux";  
//initial store
const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5
}

//reducer

// const store = createStore(() => {
//   reducer();
// });

const store = createStore(reducer, initialStore);
//store.getState
console.log(store);
//dispatch - send action to the store
//store.dispatch({ type: DECREASE});
//store.dispatch({ type: "CHANGE_NAME" });
//store.dispatch({ type: "RESET" });
//store.dispatch({ type: INCREASE });
//store.dispatch({ type: INCREASE });


//store.dispatch({ type: "DECREASE" });

function App() {
  // cart setup

  return (
   <Provider store={store}>
   <Navbar 
      //cart={store.getState()} 
      />   
      <CartContainer 
      //cart={cartItems} 
      />
   </Provider>
     
  );
}

export default App;
