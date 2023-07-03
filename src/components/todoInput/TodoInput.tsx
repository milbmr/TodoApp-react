import { useState } from "react";

export default function TodoInput() {
    const [input, setInput] = useState("");

    console.log(input);
    return (
        <form className="flex justify-between items-center">
            <input
                type="text"
                className="w-[30rem] h-[4rem] px-4 py-3 text-3xl outline-none rounded"
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
