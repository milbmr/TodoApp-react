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
                <TodoList todos={todos} deleteFn={deleteTodo} />
            </div>
        </div>
    );
}
