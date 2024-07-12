import { Link } from 'react-router-dom'
import loginImage from '../assets/login.jpg'

export default function Login() {
  return (
    <div className="grid w-full min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block">
        <img
          src={loginImage}
          width="1920"
          height="1080"
          alt="Login image"
          className="h-[100vh] w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center p-6 lg:p-10">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-500">Enter your username and password to access your account.</p>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
              <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your username" required />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="w-full text-white bg-gradient-to-r from-[#3cbeee] to-[#003042] hover:from-[#003042] hover:to-[#3cbeee] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Login
            </button>
          </form>
          <div className="flex items-center justify-between">
            <Link to="/signup" className="text-sm underline" >
              Sign up
            </Link>
            <Link to="/forget" className="text-sm underline" >
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}