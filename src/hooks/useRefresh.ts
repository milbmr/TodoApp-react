import useAuth from "./useAuth";
import axios from "@/utils/helpers";

export default function useRefresh() {
    const { setIsAuthenticated } = useAuth();

    const refresh = async () => {
        const token = await axios.get("/refresh", {
            withCredentials: true,
        });

        setIsAuthenticated((prev) => {
            return { ...prev, accessToken: token.data.accessToken };
        });

        return token.data.accessToken;
    };

    return refresh;
}
