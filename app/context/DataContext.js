import { createContext, useState } from "react";

export const DataContext = createContext();

const initialState = {
  context: "default",
};

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(initialState);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
