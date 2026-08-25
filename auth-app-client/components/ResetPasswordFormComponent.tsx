"use client"

import React, { useState } from "react"
import { toast } from "react-toastify"

const ResetPasswordFormComponent = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)


  async function handleResetPassword(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setIsLoading(false)

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

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reset-password`, {
        method: "PUT",
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch")
      }

      toast(data.message || 'Password has been changed successfully', {
        style: {
          background: "#9810fa",
          color: "white"
        }
      })

    } catch (error) {
      console.error(error);
      toast(error instanceof Error ? error.message : "Something went wrong, please try again", {
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
    <form onSubmit={handleResetPassword}>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="inline-block w-full bg-white p-2 rounded border border-gray-200 my-5"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="New password"
        className="inline-block w-full bg-white p-2 rounded border border-gray-200"
      />

      <button className="inline-block w-full mt-5 py-2.5 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-700">
        {isLoading ? "Loading..." : "Submit"}
      </button>

    </form>
  )
}

export default ResetPasswordFormComponent