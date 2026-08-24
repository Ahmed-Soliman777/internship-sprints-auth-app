const ResetPasswordFormComponent = () => {
  return (
    <form>

      <input
        type="email"
        placeholder="Email"
        className="inline-block w-full bg-white p-2 rounded border border-gray-200 my-5"
      />

      <input
        type="password"
        placeholder="New password"
        className="inline-block w-full bg-white p-2 rounded border border-gray-200"
      />

      <button className="inline-block w-full mt-5 py-2.5 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-700">
        Submit
      </button>

    </form>
  )
}

export default ResetPasswordFormComponent