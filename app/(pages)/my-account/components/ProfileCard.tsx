import React from 'react'
import { User } from '@/types/user'
import Image from 'next/image'

type Props = {
  user: User,
}


function ProfileCard({ user }: Props) {
  console.log(user)

  return (
    <div>
        <div className="max-w-md mx-auto dark:bg-slate-800 dark:text-white rounded-xl shadow-md overflow-hidden md:max-w-md">
          <div className="md:flex">
            <div className="w-full p-2 py-10">
              <div className="flex justify-center">
                <div className="relative">
                  <Image src={user?.picture as string} width={100} height={100} alt={user.name as string} className="rounded-full" />
                  <span className="absolute z-0 border-white border-4 h-5 w-5 top-[5rem] left-[4.5rem] bg-green-700 rounded-full"></span>
                </div>
              </div>
              <div className="flex flex-col text-center mt-3 mb-4">
                <span className="text-2xl font-medium">{user.name}</span>
                <span className="text-md text-gray-400">{user.email}</span>
              </div>
              
              <p className="px-16 text-center text-md">Add as many fields as needed or pull data from API or your database using jwt</p>
              <div className="px-14 mt-5">
                <button className="h-12 bg-gray-200 w-full text-black text-md rounded hover:shadow hover:bg-gray-300 mb-2">Message</button>
                <button className="h-12 bg-blue-700 w-full text-white text-md rounded hover:shadow hover:bg-blue-800">Follow</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProfileCard