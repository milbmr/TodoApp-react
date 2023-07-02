import React from "react";
import { useQuery, useMutation } from "react-query";
import axios from "axios";
import TodoInput from "@/components/todoInput";

type FormData = {
    todo: string;
    isComplete: boolean;
};

type ResponseData = Pick<FormData, keyof FormData> & { todoItemId: number };

function App() {
    const { data, isSuccess } = useQuery(
        "todos",
        async (): Promise<ResponseData[]> => {
            const { data } = await axios.get<ResponseData[]>(
                "http://localhost:5034/api/todoItems/todos"
            );
            return data;
        }
    );

    console.log(data);

    const mutation = useMutation(async (todo: FormData) => {
        return await axios.post(
            "http://localhost:5034/api/todoItems/todos",
            todo
        );
    });

    const deleteMutaion = useMutation(async (id: number) => {
        return await axios.delete(
            `http://localhost:5034/api/todoItems/todos/${id}`
        );
    });

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const data: FormData = {
            todo: formData.get("todo") as string,
            isComplete: true,
        };

        mutation.mutate(data);
    };

    return (
        <div className="">
            <h1 className="text-white text-4xl">todo app</h1>
            <TodoInput />
        </div>
    );
}

export default App;
