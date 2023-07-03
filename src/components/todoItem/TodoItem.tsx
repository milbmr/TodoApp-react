import { BsTrash, BsFillBookmarkCheckFill } from "react-icons/bs";

export default function TodoItem() {
    return (
        <div className="flex justify-between items-center bg-white px-6 py-5 mt-4 rounded text-2xl">
            <p>Im going to clean my room</p>
            <div className="flex justify-between items-center gap-6">
                <BsFillBookmarkCheckFill
                    className="hover:animate-shake ease-in-out cursor-pointer"
                    color="green"
                    size="1.8rem"
                />
                <BsTrash
                    className="hover:animate-shake ease-in-out cursor-pointer"
                    color="red"
                    size="1.8rem"
                />
            </div>
        </div>
    );
}
