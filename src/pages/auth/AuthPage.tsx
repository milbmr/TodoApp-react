import axios from "axios";
import { useMutation } from "react-query";

type UserCredentials = { userName: string; password: string };

export default function AuthPage() {
    const mutation = useMutation(async (credentials: UserCredentials) => {
        const response = await axios.post(
            "http://localhost:5116/api/Account/Login",
            credentials,
            { withCredentials: true }
        );

        console.log(response.data);
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data: UserCredentials = {
            userName: formData.get("username") as string,
            password: formData.get("password") as string,
        };

        mutation.mutate(data);
    };

    return (
        <div className="h-screen flex justify-center items-center ">
            <form onSubmit={onSubmit}>
                <div className="flex flex-col mb-4">
                    <label htmlFor="username" className="text-2xl mb-2">
                        userName
                    </label>
                    <input
                        name="username"
                        type="text"
                        className="py-2 px-4 w-[25rem] rounded text-2xl outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className="text-2xl mb-2">
                        password
                    </label>
                    <input
                        name="password"
                        type="password"
                        className="py-2 px-4 w-[25rem] rounded text-2xl outline-none"
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
