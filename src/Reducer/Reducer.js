// here we define all the application level state and define action to make the changes to state

export const initialState = {
  basket: [],
};

// Selector

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
  }
};

export default reducer;
