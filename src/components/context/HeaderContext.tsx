// components/HeaderContext.tsx
"use client";

import { createContext, useState, useContext, ReactNode } from "react";

type HeaderContextType = {
  thirdAppBar: ReactNode;
  setThirdAppBar: (content: ReactNode) => void;
};

const HeaderContext = createContext<HeaderContextType>({
  thirdAppBar: null,
  setThirdAppBar: () => {},
});

export const useHeader = () => useContext(HeaderContext);

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [thirdAppBar, setThirdAppBar] = useState<ReactNode>(null);

  return (
    <HeaderContext.Provider value={{ thirdAppBar, setThirdAppBar }}>
      {children}
    </HeaderContext.Provider>
  );
}
