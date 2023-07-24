import { useQuery } from "react-query";
import { ReturnedType } from "@/utils/types";
import useAuthInterceptor from "@/hooks/useAuthInterceptor";

export const useGetTodos = () => {
    const axiosInstance = useAuthInterceptor();

    const { data, isSuccess, isFetched, isLoading } = useQuery<ReturnedType>(
        "todos",
        async () => {
            try {
                const { data } = await axiosInstance.get<ReturnedType>(
                    "TodoItems/todos"
                );
                console.log(data);
                return data;
            } catch (err) {
                console.log(err);
                throw new Error("axios fetch error");
            }
        }
    );

    return { data, isSuccess, isFetched, isLoading };
};
