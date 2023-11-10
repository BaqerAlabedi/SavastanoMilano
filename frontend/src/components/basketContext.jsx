// // basketContext.jsx

// // eslint-disable-next-line no-unused-vars
// import React, { createContext, useContext, useReducer } from 'react';

// const BasketContext = createContext();

// const initialState = {
//   items: [], // Array to hold items in the basket
// };

// const basketReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_BASKET':
//       // Implement logic to add item to basket
//       return { ...state, items: [...state.items, action.payload] };
//     case 'REMOVE_FROM_BASKET':
//       // Implement logic to remove item from basket
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload.id),
//       };
//     // Add more cases as needed
//     default:
//       return state;
//   }
// };

// const BasketProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(basketReducer, initialState);

//   return (
//     <BasketContext.Provider value={{ state, dispatch }}>
//       {children}
//     </BasketContext.Provider>
//   );
// };

// const useBasket = () => {
//   const context = useContext(BasketContext);
//   if (!context) {
//     throw new Error('useBasket must be used within a BasketProvider');
//   }
//   return context;
// };

// export { BasketProvider, useBasket };
