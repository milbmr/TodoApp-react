import TodoItem from "./TodoItem";
import { useGetTodos } from "@/lib/react-query";

export default function TodoList({
    deleteFn,
}: {
    deleteFn: (t: string) => void;
}) {
    /* const { data } = useGetTodos(); */
    const data = {
        $values: [
            {
                todo: "clean room",
                id: 1,
                isComplete: false,
            },
            {
                todo: "clean room",
                id: 2,
                isComplete: true,
            },
            {
                todo: "clean room",
                id: 3,
                isComplete: false,
            },{
                todo: "clean room",
                id: 4,
                isComplete: false,
            },{
                todo: "clean room",
                id: 5,
                isComplete: false,
            },
        ],
    };

    const mappedTodos = data?.$values.map((t) => (
        <TodoItem
            key={t.id}
            todo={t.todo}
            save={t.isComplete}
            deleteFn={deleteFn}
        />
    ));
    return <>{mappedTodos}</>;
}
