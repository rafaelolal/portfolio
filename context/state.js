import { getNamedMiddlewareRegex } from 'next/dist/shared/lib/router/utils/route-regex';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  let sharedState = {name, setName, email, setEmail}

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}