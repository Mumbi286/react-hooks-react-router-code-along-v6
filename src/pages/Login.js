const Login = () => {
    return (
        <>
        <header>
            {/* save space for NavBar */}
        </header>
        <main>
            <h1>Login</h1>
            <form>
                <div>
                    <label for="username">Username</label>
                    <input id="username" type="text" name="username" placeholder="username" />
                </div>
                <br />
                <div>
                    <label for="password">Password</label>
                    <input id="password" type="placeholder" name="password" placeholder="Password" />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>

        </main>
        </> 
        
    );
}
 
export default Login;