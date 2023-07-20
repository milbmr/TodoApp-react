import { axiosInstance } from "@/utils/helpers";
import useAuth from "./useAuth";
import useRefresh from "./useRefresh";

export default function useAuthInterceptor() {
    const { auth } = useAuth();
    const refresh = useRefresh();

    axiosInstance.interceptors.request.use(
        (config) => {
            config.headers[
                "Authorization"
            ] = `Bearer ${auth.accessToken}`;
            return config;
        },

        (error) => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (res) => {
            return res;
        },
        async (error) => {
            if (error.response) {
                const originalRequest = error.config;
                if (error.response.status === 401 && !originalRequest?.sent) {
                    originalRequest.sent = true;
                    const newToken = await refresh();
                    originalRequest.headers[
                        "Authorization"
                    ] = `Bearer ${newToken}`;
                    return axiosInstance(originalRequest);
                }
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
}
