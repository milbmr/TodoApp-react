import TodoItem from "./TodoItem";
import { useGetTodos } from "@/lib/react-query";
import useRefresh from "@/hooks/useRefresh";

export default function TodoList({
    deleteFn,
}: {
    deleteFn: (t: string) => void;
}) {
    const { data } = useGetTodos();
    const refresh = useRefresh();

    const mappedTodos = data?.map((t) => (
        <TodoItem key={t.id} todo={t.todo} deleteFn={deleteFn} />
    ));
    const handler = async () => {
        const data = await refresh();
        console.log(data);
    };
    return (
        <>
            {mappedTodos}
            <button onClick={handler}>refresh</button>
        </>
    );
}
