import { useState } from "react";

export default function TodoInput() {
    const [input, setInput] = useState("");

    console.log(input);
    return (
        <div>
            <form>
                <input
                    type="text"
                    className=""
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                <button type="submit" className="">
                    Add
                </button>
            </form>
        </div>
    );
}
