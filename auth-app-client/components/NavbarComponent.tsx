"use client"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

const NavbarComponent = () => {


    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()

    async function handleLogout() {
        setIsLoading(true)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/logout`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            if (!response.ok) {
                throw new Error("Something went wrong!")
            }
            toast(data.message || 'Logout successful', {
                style: {
                    background: "#9810fa",
                    color: "white"
                }
            })
            router.refresh()
            // router.push('/login')
        } catch (error) {
            console.error(error)
            toast('Error while logging out, please try again', {
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
        <nav className="border-b border-amber-200 bg-amber-50">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
                <Image
                    src="/next.svg"
                    alt="Auth App logo"
                    width={90}
                    height={22}
                    className="h-auto w-20 sm:w-22.5"
                />

                <div className="flex items-center gap-3 sm:gap-5">
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="rounded-full border border-slate-800 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-800 hover:text-white"
                    >
                        {isLoading ? "Loading..." : "Log out"}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent