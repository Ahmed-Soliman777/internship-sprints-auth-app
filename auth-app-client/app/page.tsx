import LoginFormComponent from "@/components/LoginFormComponent";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <section className="bg-amber-50 flex items-center md:justify-center h-screen lg:p-10">

      {/* lg auth login image */}

      <div className="hidden lg:block">

        <Image
          src={'/next.svg'}
          alt="auth app logo"
          height={100}
          width={100}
        />

        <div className="flex justify-evenly items-end">


          <h1 className="text-4xl font-bold w-40">
            Explore the things <span className="text-blue-500">you love</span>.
          </h1>


          <div className="lg:150 xl:w-150">
            <Image
              src={'/login-lg-screen-img.png'}
              alt="auth app login image"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>

      {/* lg border */}
      <div className="hidden lg:block lg:border border-gray-300 h-full" />


      {/* login form */}
      <div className="mx-auto lg:mx-8 w-[80%] md:w-[60%] lg:w-full">

        <div className="block mb-10 lg:hidden">
          <Image
            src={'/next.svg'}
            alt="auth app logo"
            height={100}
            width={100}
            className="mx-auto"
          />
        </div>

        <h3 className="text-lg text-center lg:text-start">Log in to Auth App</h3>

        <LoginFormComponent />

        <Link
          href={'/reset-password'}
          className="inline-block my-5 text-center  w-full py-3 rounded-full cursor-pointer hover:bg-amber-100"
        >Forgotten password?</Link>
        <Link
          href={'/register'}
          className="inline-block my-5 text-center border border-blue-500 text-blue-500 w-full py-3 rounded-full cursor-pointer hover:bg-blue-100"
        >Create new account</Link>

        <div className="flex justify-center">
          <Image
            src="/next.svg"
            alt="auth app logo"
            width={70}
            height={70}
          />
        </div>

      </div>

    </section>
  );
}
