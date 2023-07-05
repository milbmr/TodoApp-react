import TodoItem from "./TodoItem";

export default function TodoList({
    todos,
    deleteFn,
}: {
    todos: string[];
        deleteFn: (t: string) => void;
}) {
    const mappedTodos = todos.map((t) => <TodoItem key={t} todo={t} deleteFn={deleteFn} />);
    return mappedTodos;
}
