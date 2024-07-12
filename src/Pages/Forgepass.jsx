import React from 'react';
import { Label, TextInput, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import forgetimage from '../assets/forget.jpg'

export default function Forgetpass() {
  return (
    <div className="grid w-full min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block">
        <img
          src={forgetimage}
          width="1920"
          height="1080"
          alt="Sign up image"
          className="h-[100vh] w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center p-6 lg:p-10">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Forget password</h1>
            <p className="text-gray-500">Enter your details to create an account.</p>
          </div>
          <form className="space-y-4">
            <div>
              
            
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email or Phone Number" />
              </div>
              <TextInput id="email" type="text" placeholder="Enter your email or phone number" required />
            </div>
          
              
             
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#3cbeee] to-[#003042] text-white hover:from-[#003042] hover:to-[#3cbeee]"
            >
              send Otp
            </Button>
          </form>
          <div className="flex items-center justify-between">
            <Link to="/login" className="text-sm text-blue-600 hover:underline dark:text-blue-500">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}