import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
   <main className='flex justify-center items-center h-screen bg-gray-800'>
    <SignUp  
    appearance={{
      layout: {
        logoImageUrl: "/icons/log.png", // Replace with your logo path
      },
    }} ></SignUp>
   </main>
  )
}

export default page
