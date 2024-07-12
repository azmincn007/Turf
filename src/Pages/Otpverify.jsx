import React from 'react';
import { TextInput, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Otpverify() {
  return (
    <div className="grid w-full min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block">
        <img src="/placeholder.svg" width="1920" height="1080" alt="OTP image" className="h-full w-full object-cover" />
      </div>
      <div className="flex items-center justify-center p-6 lg:p-10">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Enter OTP</h1>
            <p className="text-gray-500">Please enter the 4-digit OTP sent to your email.</p>
          </div>
          <form className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              {[...Array(4)].map((_, index) => (
                <TextInput
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-16 h-16 rounded-md border text-center text-2xl font-bold focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#3cbeee] to-[#003042] text-white hover:from-[#003042] hover:to-[#3cbeee]"
            >
              Continue
            </Button>
          </form>
          <div className="flex items-center justify-between">
            <Link to="/login" className="text-sm text-blue-600 hover:underline dark:text-blue-500">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}