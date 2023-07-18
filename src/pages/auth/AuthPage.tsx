export default function AuthPage() {
    return (
        <div>
            <form>
                <label htmlFor="username">userName</label>
                <input name="username" type="text" />

                <label htmlFor="password">password</label>
                <input name="password" type="password" />
            </form>
        </div>
    );
}
