import { createContext, useContext, useEffect, useState } from "react";

const toastStatus = { 401: "warning", 500: "warning", 200: "success" };
const toastDefault = { message: null, status: null };
const AppContext = createContext();

export function AppWrapper({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState(toastDefault);

  let sharedState = {
    name,
    setName,
    email,
    setEmail,
    toast,
    setToast,
  };

  useEffect(() => {
    if (toast.status) {
      const timer = setTimeout(() => {
        setToast(toastDefault);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [toast]);

  return (
    <>
      {toast.status && (
        <p className={"myToast text-bg-" + toastStatus[toast.status]}>
          {toast.message}
        </p>
      )}
      <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
    </>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
