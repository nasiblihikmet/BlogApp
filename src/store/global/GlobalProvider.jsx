import React, { createContext } from "react";

export const globalContext = createContext();

function GlobalProvider({ children }) {
  return <globalContext.Provider>{children}</globalContext.Provider>;
}

export default GlobalProvider;

export const useGlobalStore = () => {
  const value = useContext(globalContext);
  return value;
};
