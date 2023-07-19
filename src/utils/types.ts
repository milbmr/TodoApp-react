import { SetStateAction } from "react";

export type AuthResponse = {
    user: string;
    accessToken: string;
};

export type AuthContextType = {
    isAuthenticated: AuthResponse;
    setIsAuthenticated: React.Dispatch<SetStateAction<AuthResponse>>;
};
