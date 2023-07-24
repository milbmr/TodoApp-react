import TodoList from "@/components/todo";
import TodoInput from "@/components/todoInput";

export default function TodoPage({
    setTodoFn,
    deleteTodo,
    todos,
}: {
    setTodoFn: (todos: string[]) => void;
    deleteTodo: (todo: string) => void;
    todos: string[];
}) {
    return (
        <div className="flex justify-center items-center py-28">
            <div className="container">
                <TodoInput
                    todoFunction={(t) => {
                        const newTodo = [...todos, t];
                        setTodoFn(newTodo);
                    }}
                />
                <div className="h-[2px] bg-[#3bc9db] mt-16 mb-16" />
                <TodoList deleteFn={deleteTodo} />
            </div>
        </div>
    );
}
