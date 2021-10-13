import React, { createContext, useContext, useState } from "react";

const DEFAULT_VALUE = {
  state: {
    name: "",
    lastName: "",
    email: "",
  },
  setState: () => {}, //função de inicialização
};

// Context
const UserContext = createContext(DEFAULT_VALUE);

// Provider
export default function UserContextProvider({ children }) {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <UserContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Hook
export const useUser = () => useContext(UserContext);
