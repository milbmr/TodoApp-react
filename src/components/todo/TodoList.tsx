import TodoItem from "./TodoItem";

export default function TodoList({ todos }: { todos: string[] }) {
    const mappedTodos = todos.map((t, idx) => <TodoItem key={idx} todo={t} />);
    return mappedTodos;
}
