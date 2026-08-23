const LoginFormComponent = () => {
    return (
        <form>
            <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded my-2.5"
                placeholder="Email address or mobile number" />
            <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded my-2.5"
                placeholder="Password" />
            <button
                className="bg-blue-500 text-amber-50 w-full py-3 rounded-full cursor-pointer hover:bg-blue-700"
            >Log in</button>
        </form>
    )
}

export default LoginFormComponent