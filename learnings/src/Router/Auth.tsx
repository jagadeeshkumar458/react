import { createContext, useContext, useState, ReactNode } from "react";


interface AuthContextType {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

// 2. Context Initialization
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 3. Provider Component
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (userData: string) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 4. Custom Hook for Consumption
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};