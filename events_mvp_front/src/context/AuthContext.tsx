import { useQueryClient } from "@tanstack/react-query";
import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  loginAuth: (token: string) => void;
  logoutAuth: () => void;
}

interface AuthProviderProps {
    children: React.ReactNode;
  }

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("jwtToken")
  );

  const loginAuth = (token: string) => {
    localStorage.setItem("jwtToken", token);
    setIsAuthenticated(true);
  };

  const logoutAuth = () => {
    localStorage.removeItem("jwtToken");
    setIsAuthenticated(false);
    const queryClient = useQueryClient();
    queryClient.invalidateQueries();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginAuth, logoutAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
