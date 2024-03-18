function Login() {
  return (
    <div className="mt-20 ms-auto me-[350px] mb-[65px] shadow-2xl w-96 h-80 p-8">
      <h1 className="font-bold text-xl text-[#333333] mb-10">LogIn</h1>
      <form action="" className="flex flex-col">
        <input
          type="text"
          placeholder="Enter your Username"
          className="mb-5 border border-stale-300 p-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Enter your Password"
          className="mb-8 border border-stale-300 p-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-[#FF324D] border border-[#FF324D] hover:text-[#FF324D] hover:bg-white border cursor-pointer rounded-md p-2 mt-2 text-white text-sm text-center ps-8 pe-8"
        >
          LogIn
        </button>
      </form>
    </div>
  );
}

export default Login;
