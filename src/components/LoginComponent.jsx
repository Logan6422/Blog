export default function LoginComponent() {
    return (
        <div className="flex justify-center items-center h-screen">
            <form action="admin-login" className="flex flex-col gap-5 border border-terciary rounded-md p-5 text-secondary w-full max-w-md">
                <h1 className="login-text text-terciary text-2xl p-4 text-center">Who the fuck are you?? Identify Yourself</h1>
                <label htmlFor="user_name" className="flex flex-col">
                    <h2 className="user_name-title">USERNAME</h2>
                    <input type="text" id="user_name" className="user_name border border-gray-300 rounded-sm p-2" />
                </label>
                <label htmlFor="user_password" className="flex flex-col">
                    <h2 className="user_password-title">PASSWORD</h2>
                    <input type="password" id="user_password" className="user_pass border border-gray-300 rounded-sm p-2" />
                </label>
                <button type="submit" className="login-submit bg-terciary text-black w-full py-2 rounded-md">Login</button>
            </form>
        </div>
    );
}
