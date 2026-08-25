"use client"

import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

const RegisterFormComponent = () => {

  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault()

    setLoading(true)

    try {

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register`, {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password
        }),
        headers: {
          "content-type": "application/json",
        }
      })


      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Register failed");
      }

      toast(data.message || 'Register successful', {
        style: {
          background: "#9810fa",
          color: "white"
        }
      })

      router.replace('/home')

    } catch (error) {
      console.error(error);

      toast(error instanceof Error
        ? error.message : 'something went wrong, please try again', {
        style: {
          background: "#9810fa",
          color: "white"
        }
      })

    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleRegister}>

      <div className="flex flex-col lg:flex-row gap-5">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="inline-block w-full bg-white p-2 rounded border border-gray-200"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="inline-block w-full bg-white p-2 rounded border border-gray-200"
        />
      </div>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="inline-block w-full bg-white p-2 rounded border border-gray-200 my-5"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="inline-block w-full bg-white p-2 rounded border border-gray-200"
      />

      <p className="my-5 text-xs lg:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero asperiores incidunt doloremque vitae, facilis sed dolorum, consequuntur repellat neque quis iusto tenetur beatae veniam ab nihil. Est molestiae placeat cum, quas hic quos pariatur quibusdam nemo aliquam. Soluta nemo libero autem optio quam ipsum accusantium cumque delectus animi omnis quia similique, molestiae adipisci saepe beatae itaque doloremque magnam qui dolor sunt nam? Fugiat, alias voluptatibus pariatur at consequuntur unde voluptatum.
      </p>

      <button className="inline-block w-full mt-5 py-2.5 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-700">
        {loading ? "Loading..." : "Submit"}
      </button>

      <Link href={'/'} className="inline-block w-full mt-5 py-2.5 bg-gray-100 text-center rounded-full hover:bg-gray-200">
        I already have an account
      </Link>


    </form>

  )
}

export default RegisterFormComponent