import { useState } from "react";

type FormData = {
    todo: string;
    isComplete: boolean;
};

export default function TodoInput({todoFunction}: {todoFunction: (todo: string) => void}) {
    const [input, setInput] = useState("");
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const data: FormData = {
            todo: formData.get("todo") as string,
            isComplete: true,
        };

        console.log(data)

        todoFunction(data.todo);
    };

    return (
        <form onSubmit={onSubmit} className="flex justify-between items-center">
            <input
                type="text"
                name="todo"
                className="w-[33rem] h-[4rem] px-4 py-3 text-3xl outline-none rounded"
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
            <button
                type="submit"
                className="bg-[#3bc9db] text-2xl font-medium text-white rounded py-[1rem] px-[2rem]"
            >
                Add
            </button>
        </form>
    );
}
