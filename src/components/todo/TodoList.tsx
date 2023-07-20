import TodoItem from "./TodoItem";
import { useGetTodos } from "@/lib/react-query";

export default function TodoList({
    deleteFn,
}: {
    deleteFn: (t: string) => void;
}) {
    const { data } = useGetTodos();

    const mappedTodos = data?.map((t) => (
        <TodoItem key={t.id} todo={t.todo} deleteFn={deleteFn} />
    ));
    return mappedTodos;
}
