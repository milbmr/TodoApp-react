import { useQuery } from "react-query";
import { fetchTodos } from "@/utils/queries";
import { TodoType } from "@/utils/types";

export const useGetTodos = () => {
    const { data, isSuccess, isFetched, isLoading } = useQuery<TodoType>(
        "todos",
        fetchTodos
    );

    return { data, isSuccess, isFetched, isLoading };
};
