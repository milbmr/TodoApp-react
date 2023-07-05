import classNames from "classnames";
import { useState } from "react";
import { BsTrash, BsFillBookmarkCheckFill } from "react-icons/bs";

export default function TodoItem({
    todo,
    deleteFn,
}: {
    todo: string;
    deleteFn: (t: string) => void;
}) {
    const [isDeleted, setIsDeleted] = useState(false);

    return (
        <div
            className={`animate-flip transition duration-[800ms] ease-[cubic-bezier(.57,-0.46,.39,.96)] backface-visible flex justify-between items-center bg-white px-6 py-5 mt-4 rounded text-2xl ${classNames(
                { "translate-x-[-200rem]": isDeleted }
            )}`}
        >
            <p>{todo}</p>
            <div className="flex justify-between items-center gap-6">
                <BsFillBookmarkCheckFill
                    className="hover:animate-shake cursor-pointer"
                    color="green"
                    size="1.8rem"
                />
                <BsTrash
                    onClick={() => {
                        setIsDeleted(true);
                        deleteFn(todo);
                    }}
                    className="hover:animate-shake cursor-pointer active:scale-50"
                    color="red"
                    size="1.8rem"
                />
            </div>
        </div>
    );
}
