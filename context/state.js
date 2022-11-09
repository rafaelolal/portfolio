import { getNamedMiddlewareRegex } from "next/dist/shared/lib/router/utils/route-regex";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [toastStatus, setToastStatus] = useState({ message: "", type: "" });
  const [showingToast, setShowingToast] = useState(false);

  let sharedState = {
    name,
    setName,
    email,
    setEmail,
    toastStatus,
    setToastStatus,
    showingToast,
    setShowingToast,
  };

  useEffect(() => {
    if (showingToast) {
      const timer = setTimeout(() => {
        setShowingToast(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showingToast, setShowingToast]);

  return (
    <>
      {showingToast && (
        <p className={"myToast text-bg-" + toastStatus.type}>
          {toastStatus.message}
        </p>
      )}
      <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
    </>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
