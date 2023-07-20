import { axiosInstance } from "./helpers";
import { TodoType } from "./types";

export const fetchTodos = async () => {
    try {
        const { data } = await axiosInstance.get<TodoType[]>("todos");
        return data;
    } catch (err) {
        console.log(err);
        throw new Error("axios fetch error");
    }
};
