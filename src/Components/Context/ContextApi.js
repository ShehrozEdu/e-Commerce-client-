import { createContext, useState } from "react";

export const DataContext = createContext(null);

let ContextApi = ({ children }) => {
  let [account, setAccount] = useState("");
  return (
    <DataContext.Provider value={{ account, setAccount }}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextApi;
