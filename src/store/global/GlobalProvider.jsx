import React, { createContext, useReducer, useState } from "react";
import { TYPES } from "./types";

export const globalContext = createContext();

const initialState = {
  favorites: [],
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.TOGGLE_FAV:
      //? Your todo for favorites...
      return {...state,favorites: action.payload};

    default:
      return state;
  }
}
function GlobalProvider({ children }) {
  // const [favorites, setFavorites] = useState([])
  //  const value = {
  //     favorites,
  //     setFavorites,
  //  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };

  dispatch({type:"",payload:{}})

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
}

export default GlobalProvider;

export const useGlobalStore = () => {
  const value = useContext(globalContext);
  return value;
};
