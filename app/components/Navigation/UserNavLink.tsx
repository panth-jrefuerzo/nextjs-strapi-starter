import React from 'react'
import Image from 'next/image';
import { User } from '@/types/user';

type Props = {
  user?: User
}

function UserNavLink({user}:Props) {
  
  const userFName = user?.name;
  const userPhoto = user?.picture;
  const userEmail = user?.email;

  if(!user){
    return null
  }
  
  return (
    <div className={`flex px-4 border-b-[1px] border-slate-500 pb-4 mb-4`}>
    <Image
        className="rounded-full inline transition-all duration-400 ease-in-out mr-3"
        src={userPhoto as string}
        width={60}
        height={60}
        alt="Photo"
    />
    <div className="">
        <span className="text-xl block font-semibold">{userFName}</span>
        <span className="text-sm block font-semibold">{userEmail}</span>
    </div>
</div>
  )
}

export default UserNavLink