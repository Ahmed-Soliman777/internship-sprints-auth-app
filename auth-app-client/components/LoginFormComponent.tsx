"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
const LoginFormComponent = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const router = useRouter()

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault()

        setIsLoading(true)

        if (!email || !password) {
            toast('All fields are required', {
                style: {
                    background: "#9810fa",
                    color: "white"
                }
            })
            setIsLoading(false)
            return
        }

        try {

            const response = await fetch('/api/login', {
                method: "POST",
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Register failed");
            }

            toast(data.message || 'Login successful', {
                style: {
                    background: "#9810fa",
                    color: "white"
                }
            })

            router.replace('/home')

        } catch (error) {

            console.error(error);

            toast(error instanceof Error ? error.message : 'something went wrong, please try again', {
                style: {
                    background: "#9810fa",
                    color: "white"
                }
            })

        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded my-2.5"
                placeholder="Email address" />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded my-2.5"
                placeholder="Password" />
            <button
                className="bg-blue-500 text-amber-50 w-full py-3 rounded-full cursor-pointer hover:bg-blue-700"
            >{isLoading ? "Loading..." : "Log in"}</button>
        </form>
    )
}

export default LoginFormComponent