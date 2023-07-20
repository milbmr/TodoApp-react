import { useQuery } from "react-query";
import { TodoType } from "@/utils/types";
import useAuthInterceptor from "@/hooks/useAuthInterceptor";

export const useGetTodos = () => {
    const axiosInstance = useAuthInterceptor();

    const { data, isSuccess, isFetched, isLoading } = useQuery<TodoType[]>(
        "todos",
        async () => {
            try {
                const { data } = await axiosInstance.get<TodoType[]>("todos");
                return data;
            } catch (err) {
                console.log(err);
                throw new Error("axios fetch error");
            }
        }
    );

    return { data, isSuccess, isFetched, isLoading };
};
