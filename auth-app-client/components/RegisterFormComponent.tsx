import Link from "next/link"

const RegisterFormComponent = () => {
  return (
    <form>

      <div className="flex flex-col lg:flex-row gap-5">
        <input
          type="text"
          placeholder="First Name"
          className="inline-block w-full bg-white p-2 rounded border border-gray-200"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="inline-block w-full bg-white p-2 rounded border border-gray-200"
        />
      </div>

      <input
        type="email"
        placeholder="Email"
        className="inline-block w-full bg-white p-2 rounded border border-gray-200 my-5"
      />

      <input
        type="password"
        placeholder="Password"
        className="inline-block w-full bg-white p-2 rounded border border-gray-200"
      />
      
      <p className="my-5 text-xs lg:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero asperiores incidunt doloremque vitae, facilis sed dolorum, consequuntur repellat neque quis iusto tenetur beatae veniam ab nihil. Est molestiae placeat cum, quas hic quos pariatur quibusdam nemo aliquam. Soluta nemo libero autem optio quam ipsum accusantium cumque delectus animi omnis quia similique, molestiae adipisci saepe beatae itaque doloremque magnam qui dolor sunt nam? Fugiat, alias voluptatibus pariatur at consequuntur unde voluptatum.
      </p>

      <button className="inline-block w-full mt-5 py-2.5 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-700">
        Submit
      </button>

      <Link href={'/'} className="inline-block w-full mt-5 py-2.5 bg-gray-100 text-center rounded-full hover:bg-gray-200">
        I already have an account
      </Link>


    </form>

  )
}

export default RegisterFormComponent