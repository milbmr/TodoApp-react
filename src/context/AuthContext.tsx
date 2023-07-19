import { createContext, useState } from "react";
import { AuthContextType, AuthResponse } from "@/utils/types";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<AuthResponse>(
        {} as AuthResponse
    );

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
