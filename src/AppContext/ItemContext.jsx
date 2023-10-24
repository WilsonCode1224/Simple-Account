import { createContext, useState } from "react";

export const ItemContext = createContext();

export function ItemProvider({ children }) {
  const [item, setItem] = useState([]);
  return (
    <ItemContext.Provider value={{ item, setItem }}>
      {children}
    </ItemContext.Provider>
  );
}
