import { SetStateAction } from "react";

export type AuthResponse = {
    user: string;
    accessToken: string;
};

export type AuthContextType = {
    auth: AuthResponse;
    setAuth: React.Dispatch<SetStateAction<AuthResponse>>;
};

export type TodoType = {
    id: string;
    todo: string;
    isComplete: boolean;
};

export type ReturnedType = {
    $values: TodoType[];
};
