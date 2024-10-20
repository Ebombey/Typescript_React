import { useState } from "react";
import { UserContext } from "./UserContext";
import { User } from "../types/ContextTypes";

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContextProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
