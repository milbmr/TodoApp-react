import useAuth from "./useAuth";
import { axiosInstance } from "@/utils/helpers";

export default function useRefresh() {
    const { auth, setAuth } = useAuth();

    const refresh = async () => {
        const token = await axiosInstance.post("Account/Refresh", null, {
            headers: { Authorization: `Bearer ${auth.accessToken}` },
        });

        setAuth((prev) => {
            return { ...prev, accessToken: token.data.accessToken };
        });

        return token.data.accessToken;
    };

    return refresh;
}
