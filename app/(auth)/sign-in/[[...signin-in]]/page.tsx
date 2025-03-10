import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <main className='flex justify-center items-center h-screen bg-gray-800'>
     <SignIn
     appearance={{
      layout: {
        logoImageUrl: "/icons/log.png", // Replace with your logo path
      },
    }}/>
     </main>
  )
}

export default page
