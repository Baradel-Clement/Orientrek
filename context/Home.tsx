import React, { createContext, useContext, useState } from "react";

type HomeContextProviderProps = {
  children: React.ReactNode;
};

type HomeContextType = {
  displayNavList: boolean;
  displayNavSejours: boolean;
  setDisplayNavList: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayNavSejours: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HomeContext = createContext({} as HomeContextType);

export const HomeContextProvider = ({ children }: HomeContextProviderProps) => {
  const [displayNavList, setDisplayNavList] = useState(false);
  const [displayNavSejours, setDisplayNavSejours] = useState(false);

  return (
    <HomeContext.Provider
      value={{
        displayNavList,
        setDisplayNavList,
        displayNavSejours,
        setDisplayNavSejours,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeStateContext = () => useContext(HomeContext);
