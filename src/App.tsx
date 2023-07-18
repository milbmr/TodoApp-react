import { useState, useRef } from "react";
/* import { useQuery, useMutation } from "react-query"; */
/* import axios from "axios"; */
import TodoInput from "@/components/todoInput";
import TodoList from "@/components/todo";
import AuthPage from "@/pages/auth";
import TodoPage from "@/pages/todo";

/* type FormData = { */
/*     todo: string; */
/*     isComplete: boolean; */
/* }; */

/* type ResponseData = Pick<FormData, keyof FormData> & { todoItemId: number }; */

function App() {
    const [todos, setTodos] = useState<string[]>([]);
    const timeout = useRef<ReturnType<typeof setTimeout>>();

    /* const { data, isSuccess } = useQuery( */
    /*     "todos", */
    /*     async (): Promise<ResponseData[]> => { */
    /*         const { data } = await axios.get<ResponseData[]>( */
    /*             "http://localhost:5034/api/todoItems/todos" */
    /*         ); */
    /*         return data; */
    /*     } */
    /* ); */
    /**/
    /* console.log(data); */
    /**/
    /* const mutation = useMutation(async (todo: FormData) => { */
    /*     return await axios.post( */
    /*         "http://localhost:5034/api/todoItems/todos", */
    /*         todo */
    /*     ); */
    /* }); */
    /**/
    /* const deleteMutaion = useMutation(async (id: number) => { */
    /*     return await axios.delete( */
    /*         `http://localhost:5034/api/todoItems/todos/${id}` */

    const deleteTodo = (todo: string) => {
        clearTimeout(timeout.current);

        const newTodos = todos.filter((t) => t !== todo);
        timeout.current = setTimeout(() => setTodos(newTodos), 1000);
    };

    return (
        <>
            <TodoPage
                setTodoFn={setTodos}
                deleteTodo={deleteTodo}
                todos={todos}
            />
        </>
    );
}

export default App;
