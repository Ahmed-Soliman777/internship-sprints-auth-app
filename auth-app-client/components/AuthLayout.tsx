import Link from "next/link"
import React from "react"

const AuthLayout = ({ children, AuthLayoutTitle }: { children: React.ReactNode, AuthLayoutTitle: string }) => {
    return (
        <section className="bg-amber-50 overflow-auto h-screen p-10 flex flex-col justify-between">
            <div className="w-full lg:w-[45%] mx-auto">
                <Link
                    href={'/'}
                >
                    🔙
                </Link>

                <h2 className="text-xl">
                    {AuthLayoutTitle}
                </h2>

                <div className="mt-5">
                    {children}
                </div>
            </div>
            <footer className="border-t border-gray-300 text-gray-500 text-center pt-7 pb-0 mt-5 text-sm lg:text-lg">
                Auth app all rights reserved ©️2026
            </footer>
        </section>
    )
}

export default AuthLayout