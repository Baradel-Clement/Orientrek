import React, { createContext, useContext, useState } from "react";

type HomeContextProviderProps = {
  children: React.ReactNode;
};

type HomeContextType = {
  displayNavList: boolean;
  displayNavSejours: boolean;
  displayNestedSejours: boolean;
  sejourHovering: string;
  setDisplayNavList: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayNavSejours: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayNestedSejours: React.Dispatch<React.SetStateAction<boolean>>;
  setSejourHovering: React.Dispatch<React.SetStateAction<string>>;
};

export const HomeContext = createContext({} as HomeContextType);

export const HomeContextProvider = ({ children }: HomeContextProviderProps) => {
  const [displayNavList, setDisplayNavList] = useState(false);
  const [displayNavSejours, setDisplayNavSejours] = useState(false);
  const [displayNestedSejours, setDisplayNestedSejours] = useState(false);
  const [sejourHovering, setSejourHovering] = useState('false');

  return (
    <HomeContext.Provider
      value={{
        displayNavList,
        setDisplayNavList,
        displayNavSejours,
        setDisplayNavSejours,
        displayNestedSejours,
        setDisplayNestedSejours,
        sejourHovering,
        setSejourHovering
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeStateContext = () => useContext(HomeContext);
