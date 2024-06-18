import { createContext, useReducer } from "react";

const CardContext = createContext();

//definimos que hace nuestro contexto
const CardReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "clean":
      return [];
    default:
      state;
  }
};

export const CardsProvider = ({ children }) => {
  const [card, cardActions] = useReducer(CardReducer, []);
  return (
    <CardContext.Provider value={{ card, cardActions }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContext;
