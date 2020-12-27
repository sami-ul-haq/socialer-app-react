import { createContext, useState } from "react";

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <userContext.Provider value={{ user: [user, setUser] }}>
      {children}
    </userContext.Provider>
  );
};
