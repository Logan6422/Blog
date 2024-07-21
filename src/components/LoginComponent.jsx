
export default function LoginComponent(){
    return(
        <>
             <h1 className="login-text text-terciary text-2xl p-4 ">Who the fuck are you?? Identify Yourself</h1>
            <form action="admin-login" className="flex flex-col border border-terciary rounded-md p-5 gap-10 text-secondary">
                <label htmlFor="user_name">
                    <h1 className="user_name-title">USERNAME</h1> 
                    <input type="text"  id="user_name" className="user_name border rounded-sm"></input>
                </label>
                <label htmlFor="user_password">
                <h1 className="user_password-title">PASSWORD</h1> 
                 <input type="text"  id="user_password" className="user_pass"></input>
                </label>
                <div className="flex justify-center">
                        <button className="login-submit bg-terciary text-black w-20">Login</button>
                    </div>
            </form>
        </>
    );
}