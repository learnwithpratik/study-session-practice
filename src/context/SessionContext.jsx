import { createContext, useState } from "react";

export const SessionContext = createContext();

export const StudyProvider = ({ children }) => {
  const [session, setSession] = useState([]);

  const addSession = (session) => {
    setSession((prev) => [...prev, session]);
  };

  const deleteSession = (id) => {
    setSession((prev) => prev.filter((s) => s.id !== id));
  };
  return (
    <SessionContext.Provider value={{ session, addSession, deleteSession }}>
      {children}
    </SessionContext.Provider>
  );
};
