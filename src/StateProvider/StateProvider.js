import React, {
  createContect,
  createContext,
  useContext,
  useReducer,
} from "react";

// prepares the  data layer
export const StateContext = createContext();

// Wrap our app and provide the data layer
export const StateProvider = ({ reducer, intilialState, children }) => {
  <StateContext.Provider value={useReducer(reducer, intilialState)}>
    {children}
  </StateContext.Provider>;
};

// Pull Information form the data layer 
export const useStateValue = () => useContext(StateContext);
