import { useState, createContext } from "react";

export const DataContext = createContext(null);

const ContextApi = ({ children }) => {
  const [account, setAccount] = useState("");
  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default ContextApi;
